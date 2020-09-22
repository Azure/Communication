import React, { useState } from 'react';
import { mediaGalleryGridStyle, mediaGalleryStyle } from './styles/MediaGallery.styles';
import { RemoteParticipant, LocalVideoStream } from '@azure/communication-calling';
import { utils } from '../Utils/Utils';
import LocalStreamMedia from './LocalStreamMedia';
import RemoteStreamMedia from './RemoteStreamMedia';

export interface MediaGalleryProps {
  userId: string;
  remoteParticipants: RemoteParticipant[];
  localVideoStream: LocalVideoStream;
}

export default (props: MediaGalleryProps): JSX.Element => {
  const [gridCol, setGridCol] = useState(1);
  const [gridRow, setGridRow] = useState(1);

  const calculateNumberOfRows = React.useCallback(
    (participants, gridCol) => Math.ceil((participants.length + 1) / gridCol),
    []
  );
  const calculateNumberOfColumns = React.useCallback(
    (participants) => (participants && participants.length > 0 ? Math.ceil(Math.sqrt(participants.length + 1)) : 1),
    []
  );
  const getMediaGalleryTilesForParticipants = (participants: RemoteParticipant[], userId: string) => {
    // create a RemoteStreamMedia component for every remote participant
    const remoteParticipantsMediaGalleryItems = participants.map((participant) => (
      <div className={mediaGalleryStyle}>
        <RemoteStreamMedia
          key={utils.getId(participant.identifier)}
          stream={participant.videoStreams[0]}
          label={participant.displayName ?? utils.getId(participant.identifier)}
        />
      </div>
    ));

    // create a LocalStreamMedia component for the local participant
    const localParticipantMediaGalleryItem = (
      <div key={userId} className={mediaGalleryStyle}>
        <LocalStreamMedia label={userId} stream={props.localVideoStream} />
      </div>
    );

    // add the LocalStreamMedia at the beginning of the list
    remoteParticipantsMediaGalleryItems.unshift(localParticipantMediaGalleryItem);

    return remoteParticipantsMediaGalleryItems;
  };

  const numberOfColumns = calculateNumberOfColumns(props.remoteParticipants);
  if (numberOfColumns !== gridCol) setGridCol(numberOfColumns);
  const numberOfRows = calculateNumberOfRows(props.remoteParticipants, gridCol);
  if (numberOfRows !== gridRow) setGridRow(numberOfRows);

  return (
    <div
      className={mediaGalleryGridStyle}
      style={{
        gridTemplateRows: `repeat(${gridRow}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${gridCol}, 1fr)`
      }}
    >
      {getMediaGalleryTilesForParticipants(props.remoteParticipants, props.userId)}
    </div>
  );
};

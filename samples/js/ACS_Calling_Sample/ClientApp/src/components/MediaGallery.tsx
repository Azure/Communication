import React, { useState, useEffect } from "react";
import StreamMedia from "./StreamMedia";
import StaticMedia from "./StaticMedia";
import {
  mediaGalleryGridStyle,
  mediaGalleryStyle,
} from "./styles/MediaGallery.styles";
import { ParticipantStream } from "core/reducers";
import {
  RemoteParticipant,
  PreviewRenderer,
  LocalVideoStream,
  VideoDeviceInfo,
  CallClient,
} from "@skype/spool-sdk";

export interface MediaGalleryProps {
  userId: string;
  streams: ParticipantStream[];
  remoteParticipants: RemoteParticipant[];
  localVideo: boolean;
  callClient: CallClient;
  localVideoRendererIsBusy: boolean;
  localPreviewRenderer: PreviewRenderer;
  localVideoStream: LocalVideoStream;
  videoDeviceInfo: VideoDeviceInfo;
  setLocalVideo(
    checked: boolean,
    callClient: CallClient,
    previewRenderer: PreviewRenderer,
    device: VideoDeviceInfo,
    localVideoStream: LocalVideoStream,
    isRendererBusy: boolean
  ): void;
}

export default function MediaGallery(props: MediaGalleryProps) {
  const [gridCol, setGridCol] = useState(1);
  const [gridRow, setGridRow] = useState(1);
  useEffect(() => {
      props.setLocalVideo(props.localVideo, props.callClient, props.localPreviewRenderer, props.videoDeviceInfo, props.localVideoStream, props.localVideoRendererIsBusy);
  }, [props.localVideo]);

  const calculateNumberOfRows = React.useCallback(
    (participants, gridCol) => Math.ceil((participants.length + 1) / gridCol),
    []
  );
  const calculateNumberOfColumns = React.useCallback(
    (participants) =>
      participants && participants.length > 0
        ? Math.ceil(Math.sqrt(participants.length + 1))
        : 1,
    []
  );
  function getMediaGalleryTilesForParticipants(
    participants: RemoteParticipant[],
    streams: ParticipantStream[],
    userId: string
  ) {
    const remoteParticipantsStreamInfo = participants.map(
      (participant: RemoteParticipant): ParticipantStream => {
        const participantStreams = streams.filter(
          (stream) =>
            stream.userId !== undefined && stream.userId === participant.userId
        );
        return participantStreams.length > 0
          ? { userId: participant.userId, stream: participantStreams[0].stream }
          : { userId: participant.userId, stream: undefined };
      }
    );
    const remoteParticipantsMediaGalleryItems = remoteParticipantsStreamInfo.map(
      (participant: ParticipantStream, i: number) => (
        <div key={i} className={mediaGalleryStyle}>
          {participant.stream === undefined ? (
            <StaticMedia userId={participant.userId} />
          ) : (
            <StreamMedia
              stream={participant.stream}
              userId={participant.userId}
            />
          )}
        </div>
      )
    );
    const localParticipantMediaGalleryItem = (
      <div key={userId} className={mediaGalleryStyle}>
        {(
            !props.localVideo ? <StaticMedia userId={userId} />
            : 
            <StreamMedia
              userId={userId}
              localStream={props.localVideoStream}
              isLocalStream={true}
            />
          
          )}
      </div>
    );

    remoteParticipantsMediaGalleryItems.unshift(
      localParticipantMediaGalleryItem
    );
    return remoteParticipantsMediaGalleryItems;
  }

  const numberOfColumns = calculateNumberOfColumns(props.remoteParticipants);
  if (numberOfColumns != gridCol) setGridCol(numberOfColumns);
  const numberOfRows = calculateNumberOfRows(props.remoteParticipants, gridCol);
  if (numberOfRows != gridRow) setGridRow(numberOfRows);

  return (
    <div
      className={mediaGalleryGridStyle}
      style={{
        gridTemplateRows: `repeat(${gridRow}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${gridCol}, 1fr)`,
      }}
    >
      {getMediaGalleryTilesForParticipants(
        props.remoteParticipants,
        props.streams,
        props.userId
      )}
    </div>
  );
}

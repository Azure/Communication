import React, { useEffect, useState } from 'react';
import { ParticipantStream } from '../core/reducers';
import { hiddenFullScreenStyle, fullScreenStyle, loadingStyle } from './styles/MediaFullScreen.styles';
import { RemoteVideoStream, Renderer, RendererView } from '@azure/communication-calling';
import { Spinner, SpinnerSize } from '@fluentui/react';
import { utils } from 'Utils/Utils';

export interface MediaFullScreenProps {
  activeScreenShareStream: ParticipantStream;
}

export default (props: MediaFullScreenProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const fullScreenStreamMediaId = 'fullScreenStreamMediaId';
  let rendererView: RendererView;

  /**
   * Start stream after DOM has rendered
   */

  const activeScreenShareStream = props.activeScreenShareStream;

  const renderStream = async () => {
    if (activeScreenShareStream && activeScreenShareStream.stream) {
      let stream: RemoteVideoStream = activeScreenShareStream.stream;
      var renderer: Renderer = new Renderer(stream);
      rendererView = await renderer.createView({ scalingMode: 'Fit' });

      let container = document.getElementById(fullScreenStreamMediaId);
      if (container && container.childElementCount === 0) {
        setLoading(false);
        container.appendChild(rendererView.target);
      }
    } else {
      if (rendererView) {
        rendererView.dispose();
      }
    }
  };
  useEffect(() => {
    renderStream();
  }, [activeScreenShareStream, renderStream]);

  const displayName =
    props.activeScreenShareStream.user.displayName ?? utils.getId(props.activeScreenShareStream.user.identifier);

  return (
    <>
      {loading && (
        <div className={loadingStyle}>
          <Spinner label={`Loading ${displayName}'s screen`} size={SpinnerSize.xSmall} />
        </div>
      )}
      <div id={fullScreenStreamMediaId} className={loading ? hiddenFullScreenStyle : fullScreenStyle}></div>
    </>
  );
};

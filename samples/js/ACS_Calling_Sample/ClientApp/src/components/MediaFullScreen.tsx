import React, { useEffect } from "react";
import { ParticipantStream } from '../core/reducers';
import { fullScreenStyle } from './styles/MediaFullScreen.styles';

export interface MediaFullScreenProps {
  activeScreenShareStream: ParticipantStream;
}

export default function MediaFullScreen(props: MediaFullScreenProps) {
  const fullScreenstreamMediaId = "fullScreenstreamMediaId";

  /**
   * Start stream after DOM has rendered
   */
  useEffect(() => {
    if(!props.activeScreenShareStream || !props.activeScreenShareStream.stream) 
      return;
      const element = document.getElementById(fullScreenstreamMediaId);
      if (element)
        props.activeScreenShareStream.stream.render(element);
  }, []);

  return (
    <div id={fullScreenstreamMediaId} className={fullScreenStyle}>
    </div>
  )
}
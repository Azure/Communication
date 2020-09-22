// © Microsoft Corporation. All rights reserved.

import React, { useEffect, useState } from 'react';
import { Label } from '@fluentui/react';
import { RemoteVideoStream, Renderer, RendererView } from '@azure/communication-calling';
import { videoHint, mediaContainer } from './styles/StreamMedia.styles';
import { utils } from 'Utils/Utils';
import staticMediaSVG from '../assets/staticmedia.svg';
import { Image, ImageFit } from '@fluentui/react';

export interface RemoteStreamMediaProps {
  label: string;
  stream: RemoteVideoStream | undefined;
}

export default (props: RemoteStreamMediaProps): JSX.Element => {
  let rendererView: RendererView;

  let streamId = props.stream ? utils.getStreamId(props.label, props.stream) : `${props.label} - no stream`;

  const [available, setAvailable] = useState(false);

  const imageProps = {
    src: staticMediaSVG.toString(),
    imageFit: ImageFit.contain,
    maximizeFrame: true
  };

  const stream = props.stream;

  const renderStream = async () => {
    var container = document.getElementById(streamId);

    if (container && props.stream && props.stream.isAvailable) {
      setAvailable(true);

      var renderer: Renderer = new Renderer(props.stream);
      rendererView = await renderer.createView({ scalingMode: 'Crop' });

      // we need to check if the stream is available still and if the id is what we expect
      if (container && container.childElementCount === 0) {
        container.appendChild(rendererView.target);
      }
    } else {
      setAvailable(false);

      if (rendererView) {
        rendererView.dispose();
      }
    }
  };

  useEffect(() => {
    if (!stream) {
      return;
    }

    stream.on('availabilityChanged', renderStream);

    if (stream.isAvailable) {
      renderStream();
    }
  }, [stream, renderStream]);

  return (
    <div className={mediaContainer}>
      <div style={{ display: available ? 'block' : 'none' }} className={mediaContainer} id={streamId} />
      <Image style={{ display: available ? 'none' : 'block' }} {...imageProps} />
      <Label className={videoHint}>{props.label}</Label>
    </div>
  );
};

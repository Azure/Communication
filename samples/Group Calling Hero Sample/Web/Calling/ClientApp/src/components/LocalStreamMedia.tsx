// © Microsoft Corporation. All rights reserved.

import React, { useEffect, useState } from 'react';
import { Image, ImageFit, Label } from '@fluentui/react';
import { LocalVideoStream, Renderer, RendererView } from '@azure/communication-calling';
import { videoHint, mediaContainer, localVideoContainerStyle } from './styles/StreamMedia.styles';
import { Constants } from '../core/constants';
import staticMediaSVG from '../assets/staticmedia.svg';

export interface LocalStreamMediaProps {
  label: string;
  stream: LocalVideoStream;
}

export default (props: LocalStreamMediaProps): JSX.Element => {
  let rendererView: RendererView;

  const [available, setAvailable] = useState(false);

  const imageProps = {
    src: staticMediaSVG.toString(),
    imageFit: ImageFit.contain,
    maximizeFrame: true
  };

  useEffect(() => {
    (async () => {
      if (props.stream) {
        var renderer: Renderer = new Renderer(props.stream);
        rendererView = await renderer.createView({ scalingMode: 'Crop' });

        var container = document.getElementById(Constants.LOCAL_VIDEO_PREVIEW_ID);

        if (container && container.childElementCount === 0) {
          container.appendChild(rendererView.target);
          setAvailable(true);
        }
      } else {
        if (rendererView) {
          rendererView.dispose();
          setAvailable(false);
        }
      }
    })();

    return () => {
      if (rendererView) {
        rendererView.dispose();
        setAvailable(false);
      }
    };
  }, [props.stream]);

  return (
    <div className={mediaContainer}>
      <div
        style={{ display: available ? 'block' : 'none' }}
        className={localVideoContainerStyle}
        id={Constants.LOCAL_VIDEO_PREVIEW_ID}
      />
      <Image style={{ display: available ? 'none' : 'block' }} {...imageProps} />
      <Label className={videoHint}>{props.label}</Label>
    </div>
  );
};

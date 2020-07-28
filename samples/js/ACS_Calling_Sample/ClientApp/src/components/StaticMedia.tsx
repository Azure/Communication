// © Microsoft Corporation. All rights reserved.
import React from "react";
import { Image, ImageFit } from '@fluentui/react';
import staticMediaSVG from '../assets/staticmedia.svg';
import { 
    videoHint,
    staticMediaContainer
} from './styles/StaticMedia.styles';

export interface StaticMediaProps {
    userId: string;
}

export default function StaticMedia(props: StaticMediaProps): JSX.Element {
    const imageProps = {
        src: staticMediaSVG.toString(),
        imageFit: ImageFit.contain,
        maximizeFrame: true,
        style: {maxHeight: 168, maxWidth: 160}
    };
    return (
        <div className={staticMediaContainer}>
            <Image {...imageProps}/>
            <span className={videoHint}>{props.userId}</span>
        </div>
    );
}



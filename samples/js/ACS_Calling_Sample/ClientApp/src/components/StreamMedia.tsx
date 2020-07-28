// © Microsoft Corporation. All rights reserved.

import React, {useEffect} from "react";
import { Label } from '@fluentui/react';
import { RemoteVideoStream, LocalVideoStream } from '@skype/spool-sdk';
import { videoHint, mediaContainer, localVideoContainerStyle } from './styles/StreamMedia.styles';
import { Constants } from '../core/constants';

export interface StreamMediaProps {
    userId: string;
    stream?: RemoteVideoStream;
    isLocalStream?: boolean;
    localStream?: LocalVideoStream;
}

export default function StreamMedia(props: StreamMediaProps) {
    const streamMediaId = props.stream && `${props.userId}-${props.stream.type}`;
    
    useEffect(() => {
        if (props.stream) {
            const streamMediaId = `${props.userId}-${props.stream.type}`;
            const videoStreamHtmlElement = document.getElementById(streamMediaId);
            if (videoStreamHtmlElement)
                props.stream.render(videoStreamHtmlElement, "Fit");
        }
    }, [props.stream]);

    return (
        <div className={mediaContainer}>
            {props.isLocalStream ?
                <div className={localVideoContainerStyle} 
                    id={Constants.LOCAL_VIDEO_PREVIEW_ID} 
                /> :
                <div className={mediaContainer} id={streamMediaId}></div>
            }
            
            <Label className={videoHint}>{props.userId}</Label>
        </div>
    );
}




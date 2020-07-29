// © Microsoft Corporation. All rights reserved.
import React from "react";
import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import { endCallContainerStyle, 
    endCallTitleStyle, 
    buttonStyle, 
    mainStackTokens, 
    buttonsStackTokens, 
    upperStackTokens, 
    videoCameraIconStyle, 
    bottomStackTokens,
    surveyQuestionStyle,
    emojiStyle,
    bottomStackfooterStyle } from './styles/EndCall.styles';

export interface EndCallProps {
    rejoinHandler(): void;
    homeHandler(): void;
}

export default function EndCall(props: EndCallProps): JSX.Element {
    const leftCall = "You left the call";
    const goHomePage = "Go to homepage";
    const rejoinCall = "Rejoin call";
    const customerOpinionQuestion = "What did you think of this sample app?";
    const feedbackHelp = "Your feedback helps us improve, thank you!";

    return <Stack verticalAlign="center" tokens={mainStackTokens} className={endCallContainerStyle}>
                <Stack tokens={upperStackTokens}>
                    <div className={endCallTitleStyle}>{leftCall}</div>
                    <Stack horizontal tokens={buttonsStackTokens}>
                        <PrimaryButton className={buttonStyle} onClick={props.rejoinHandler}>
                            <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium"/>{rejoinCall}
                        </PrimaryButton>
                        <DefaultButton className={buttonStyle} onClick={props.homeHandler} >
                            {goHomePage}
                        </DefaultButton>
                    </Stack>
                </Stack>
                <Stack tokens={bottomStackTokens}>
                    <div className={surveyQuestionStyle}>{customerOpinionQuestion}</div>
                    <Stack horizontal>
                        <div className={emojiStyle} onClick={()=> alert("Liked")}>👍</div>
                        <div className={emojiStyle} onClick={()=> alert("Disliked")}>👎</div>
                    </Stack>
                    <div className={bottomStackfooterStyle}>{feedbackHelp}</div>
                </Stack>
            </Stack>
}
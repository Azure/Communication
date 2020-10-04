import React from "react";
export default function CallEndReasonCard(props) {
    const callEndReason = props.callEndReason;
    return (
        <div><span>Previous call end reason</span>
            <ul>
                <li><span style={{ color: callEndReason.code !== 0 ? '#a4262c' : ''}}>Code: {callEndReason.code}</span></li>
                <li><span style={{ color: callEndReason.code !== 0 ? '#a4262c' : ''}}>SubCode: {callEndReason.subcode}</span></li>
            </ul>
        </div>
    );
}
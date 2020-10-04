import React, { useState, useRef } from "react";
import { Callout, TextField } from 'office-ui-fabric-react';
import { Button } from 'office-ui-fabric-react'


export default function AddParticipantPopover(props) {
    const [userId, setUserId] = useState('');
    const [alternateCallerId, setAlternateCallerId] = useState('');
    const [showAddParticipantPanel, setShowAddParticipantPanel] = useState(false);

    function handleAddCommunicationUser() {
        console.log('handleAddCommunicationUser', userId);
        try {
            props.call.addParticipant({ communicationUserId: userId });
        } catch (e) {
            console.error(e);
        }
    }

    function handleAddPhoneNumber() {
        console.log('handleAddPhoneNumber', userId);
        try {
            props.call.addParticipant({ phoneNumber: userId }, { alternateCallerId: alternateCallerId });
        } catch (e) {
            console.error(e);
        }
    }

    function toggleAddParticipantPanel() {
        setShowAddParticipantPanel(!showAddParticipantPanel);
    }

    return (
        <>
        <span><h3>Participants</h3></span>
        <span><a href="#" onClick={toggleAddParticipantPanel}><i className="add-participant-button ms-Icon ms-Icon--AddFriend" aria-hidden="true"></i></a></span>
        <div className="ms-Grid">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12">
                    {
                        showAddParticipantPanel &&
                        <div className="add-participant-panel">
                            <h3 className="add-participant-panel-header">Add a participant</h3>
                            <div className="add-participant-panel-header">
                                <TextField className="text-left" label="Identifier" onChange={e => setUserId(e.target.value)} />
                                <TextField className="text-left" label="Alternate Caller Id (For adding phone number only)" onChange={e => setAlternateCallerId(e.target.value)} />
                                <Button className="mt-3" onClick={handleAddCommunicationUser}>Add CommunicationUser</Button>
                                <Button className="mt-1" onClick={handleAddPhoneNumber}>Add Phone Number</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        </>
    );
}
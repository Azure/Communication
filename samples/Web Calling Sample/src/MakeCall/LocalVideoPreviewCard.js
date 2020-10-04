import React from "react";
import { LocalVideoStream, Renderer} from '@azure/communication-calling';
export default class LocalVideoPreviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.cameraDeviceInfo = props.deviceManager.getCameraList().find(cameraDevice => {
            return cameraDevice.id === props.selectedCameraDeviceId;
        });
    }

    async componentDidMount() {
        const localVideoStream = new LocalVideoStream(this.cameraDeviceInfo);
        const renderer = new Renderer(localVideoStream);
        this.view = await renderer.createView();
        const targetContainer = document.getElementById('localVideoRenderer');
        targetContainer.appendChild(this.view.target);
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: "0.5em", padding: "0.5em" }}>
                    <div id="localVideoRenderer"></div>
                </div>
            </div>
        );
    }
}

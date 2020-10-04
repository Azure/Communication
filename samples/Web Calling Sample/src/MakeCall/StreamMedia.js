import React, { useEffect, createRef } from "react";
import { Renderer } from "@azure/communication-calling";
export default class StreamMedia extends React.Component {
    constructor(props) {
        super(props);
        this.stream = props.stream;
        this.id = props.id;
        this.state = {
            isAvailable: props.stream.isAvailable
        };
    }

    /**
     * Start stream after DOM has rendered
     */
    async componentDidMount() {
        console.log('StreamMedia', this.stream, this.id);
        let renderer = new Renderer(this.stream);
        let view;
        let videoContainer;

        const renderStream = async () => {
            if(!view) {
                view = await renderer.createView();
            }
            videoContainer = document.getElementById(`${this.id}-${this.stream.type}-${this.stream.id}`);
            videoContainer.hidden = false;
            videoContainer.appendChild(view.target);
        }

        this.stream.on('availabilityChanged', async () => {
            console.log(`stream=${this.stream.type}, availabilityChanged=${this.stream.isAvailable}`);
            if (this.stream.isAvailable) {
                this.setState({ isAvailable: true });
                await renderStream();
            } else {
               videoContainer.hidden = true;
                this.setState({ isAvailable: false });
            }
        });

        if (this.stream.isAvailable) {
            this.setState({ isAvailable: true });
            await renderStream();
        }
    }

    render() {
        if(this.state.isAvailable) {
            return (
                <div className="py-3 ms-Grid-col ms-lg4 ms-sm-12">
                    <h4 className="video-title">{this.id}</h4>
                    <div className="w-100" id={`${this.id}-${this.stream.type}-${this.stream.id}`}></div>
                </div>
            );
        } else {
            return null;
        }
    }
}




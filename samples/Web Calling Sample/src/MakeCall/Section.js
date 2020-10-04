import React from "react";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton } from 'office-ui-fabric-react'

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.subtitle = props.subtitle;
        this.code = props.code;

        this.state = {
            sectionBody: props.sectionBody,
            call: props.call,
            callClient: props.callClient,
            isIncoming: props.isIncoming,
            showCode: false
        }
    }

    toggleCode() {
        this.setState({showCode: !this.state.showCode});
    }

    render() {
        return (
            <div className="px-5 py-5" style={{ boxShadow: Depths.depth8}}>
                <h3 className="mb-4">{this.title}</h3>
                <div className="d-flex flex-lg-row justify-content-between">
                    <p>{this.subtitle}</p>
                    <PrimaryButton text="</> Show Code" onClick={() => this.toggleCode()}/>
                </div>
                <div className="separator mb-3"></div>
                {
                    this.state.showCode &&
                    <pre>
                        <code style={{color: '#b3b0ad'}}>
                            {this.code}
                        </code>
                    </pre>
                }
                <div>
                <p>On this instantiation you are logged in as <b>{this.userId}</b></p>
                <b>Try it out.</b> Open a <a href="/" target="_blank">new window</a>, and place a call to <b><i>{this.userId}</i></b>
                <p>Come back to this page to accept the incoming call.</p>
                {
                    this.state.isIncoming && (<CallCard call={this.state.call} callClient={this.state.callClient}/>)
                }
                {
                    this.state.incomingCallEndReason &&
                    (<CallEndReasonCard callEndReason={this.state.incomingCallEndReason} />)
                }
            </div>
            </div>
        );
    }
}
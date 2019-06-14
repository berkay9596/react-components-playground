import React, { Component } from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

class FiddleComponent extends Component {
    render() {
        return (
            <div>
                <LiveProvider code={this.props.code} scope={this.props.scope}>
                    <LiveEditor />
                    <LiveError />
                    <LivePreview />
                </LiveProvider>
            </div>
        );
    }
}

export default FiddleComponent;
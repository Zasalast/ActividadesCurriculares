import React, { Component } from 'react';
import firebase from 'firebase';
export default class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadvalue: 0,
            picture:null
        };
    }
    render() {
        return (
            <div className="class-name">
                <progress value={this.state.uploadvalue} max="100"></progress>
                <br />
                <input type="file" onChange={this.props.onUpload} />
                <br />
<img src={this.state.picture} width="300" alt=""/>
            </div>
        );
    }
}
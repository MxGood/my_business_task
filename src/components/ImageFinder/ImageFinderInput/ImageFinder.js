import React, { Component } from 'react';
import FieldGroup from '../../FieldGroup';

class ImageFinderInput extends Component {
    render() {
        return (
            <div>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                />
            </div>
        );
    }
}

export default ImageFinderInput;

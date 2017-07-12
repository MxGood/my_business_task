import React, {Component} from 'react';
import ImageFinderInput from './ImageFinderInput';
import ImageFinderResultTable from './ImageFinderResultTable';

class ImageFinder extends Component{
    render() {
        return(
            <div>
                <ImageFinderInput/>
                <ImageFinderResultTable/>
            </div>
        );
    }
}

export default ImageFinder;

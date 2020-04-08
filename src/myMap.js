import React, { Component } from 'react';
import SimpleMap from './SimpleMap';
// import SimpleMap2 from './SimpleMap2';


class myMap extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{ width: 600, height: 400, margin: '0 auto'}}>
                <label>
                    Map page...
                </label>  
                <SimpleMap />    
                {/* <SimpleMap2 />   */}
            </div>
        );
    }
}

export default myMap; //AIzaSyAttmWfI1Q0OyLdFITcl_ortsXM-UBC9ys





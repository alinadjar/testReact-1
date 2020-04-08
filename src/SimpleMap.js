import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const greatPlaceStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: 40,
    height: 40,
    left: -40 / 2,
    top: -40 / 2,
  
    border: '5px solid #f44336',
    borderRadius: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
  };



const AnyReactComponent = ({ text }) => <div style={{ color: '#FFF', fontWeight: 'bold'}}>{text}</div>;
class MyGreatPlace extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={greatPlaceStyle}>
                {this.props.text}
            </div>
         );
    }
} 
// export default MyGreatPlace;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAttmWfI1Q0OyLdFITcl_ortsXM-UBC9ys' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"                        
                    />
                    <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}  />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
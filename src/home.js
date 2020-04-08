import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doubleAction } from './iRedux/Actions/double';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myValue: 'Hi',
            yourValue: 'Hello',
            double: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.doubleChannel) {
            console.log('component received props');
            this.setState({ double: nextProps.doubleChannel.currentValue });
        }
    }

    doubleClick = () => {
        this.props.makeDouble();
    }

    render() {

        const { double } = this.state;
        const x = this.props.doubleChannel;
        return (
            <div>
                <p>state.double = {this.state.double} </p>
                <p>x.currentValue = {x.currentValue} </p>
                <pre>{JSON.stringify(x, null, 2)}</pre>

                <button onClick={this.doubleClick}> DOUBLE</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    doubleChannel: state.dbl
})

const mapDispathToProps = {
    makeDouble: doubleAction
}

export default connect(mapStateToProps, mapDispathToProps)(Home)

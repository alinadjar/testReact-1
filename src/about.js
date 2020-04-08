import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doubleAction, tripleAction } from './iRedux/Actions/double';

class About extends Component {
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
            console.log('component About received props');
            this.setState({ double: nextProps.doubleChannel.currentValue });
        }
    }

    doubleClick = () => {
        this.props.makeDouble();
    }

    tripleClick = () => {
        this.props.makeTriple();
    }

    render() {

        const { double } = this.state;
        const x = this.props.doubleChannel;
        return (
            <div>
                <h3>About Page...</h3>
                <p>state.double = {this.state.double} </p>
                <p>x.currentValue = {x.currentValue} </p>
                <pre>{JSON.stringify(x, null, 2)}</pre>

                <button onClick={this.doubleClick}> DOUBLE</button>
                <button onClick={this.tripleClick}> Triple</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    doubleChannel: state.dbl
})

const mapDispathToProps = {
    makeDouble: doubleAction,
    makeTriple: tripleAction
}

export default connect(mapStateToProps, mapDispathToProps)(About)

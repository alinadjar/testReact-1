import React, { Component } from 'react';



class NicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            y: 0
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            this.setState({ y: this.state.y - 1 })
        });
    }

    render() {
        return (
            <div>
                {this.state.count > 0 && this.props.history.push('/SignIn')}
                <h1>Some text..</h1>
                <button onClick={this.handleClick}>INC</button>
                <div className="row">
                    <div className="col-3">count = {this.state.count}</div>
                    <div className="col-3">y = {this.state.y}</div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default NicePage;
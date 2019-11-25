import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    clickProceed = () => {
        //console.log('clicked proceed ....');

        const {pathname, search} = this.props.location.state.from;
        const query = new URLSearchParams(search);
        const pageNumber = query.get('pageNumber') || 1;

        console.log(pathname);
        //this.props.history.push(pathname);
        this.props.history.push('/grid');
    }

    render() {
        return (
            <div>
                <h3 style={{padding: '2%', margin:'0 auto', textAlign:'center'}}>Login Page ...</h3>
                  <pre>{ JSON.stringify(this.props, null, 2)}</pre>

                  <div className="row">
                      <button className="btn btn-primary" onClick={this.clickProceed}>Proceed</button>
                  </div>
            </div>
        )
    }
}

export default Login;

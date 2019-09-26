import React, { Component } from 'react';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
//import 'bootstrap-material-design/dist/js/bootstrap-material-design.js';


class NicePageBS extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ padding: '2%' }}>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="checkbox" checked autocomplete="off" /> Checked
                    </label>
                </div>

                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-link">Link</button>
                <button type="button" className="btn"><code>btn</code> only</button>
                <button type="button" className="btn active"><code>.active</code></button>
                <fieldset disabled>
                    <button type="button" className="btn"><code>btn</code> only</button>
                    <button type="button" className="btn btn-primary">Primary</button>
                </fieldset>
                <button type="button" className="btn btn-raised btn-primary">Primary</button>
                <button type="button" className="btn btn-raised btn-secondary">Secondary</button>
                <button type="button" className="btn btn-raised btn-success">Success</button>
                <button type="button" className="btn btn-primary bmd-btn-fab">
                    <i className="material-icons">grade</i>
                </button>
                <button type="button" className="btn btn-secondary bmd-btn-fab">
                    <i className="material-icons">grade</i>
                </button>
                <button type="button" className="btn btn-primary bmd-btn-icon">
                    <i className="material-icons">more_vert</i>
                </button>
                <button type="button" className="btn btn-secondary bmd-btn-icon">
                    <i className="material-icons">more_vert</i>
                </button>


                <div className="bmd-form-group bmd-collapse-inline pull-xs-right">
                    <button className="btn bmd-btn-icon" for="search" data-toggle="collapse" data-target="#collapse-search" aria-expanded="false" aria-controls="collapse-search">
                        <i className="material-icons">search</i>
                    </button>
                    <span id="collapse-search" className="collapse">
                        <input className="form-control" type="text" id="search" placeholder="Enter your query..." />
                    </span>
                </div>


                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="bmd-label-floating">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                        <span className="bmd-help">We'll never share your email with anyone else.</span>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="bmd-label-floating">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1" className="bmd-label-floating">Example select</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect2" className="bmd-label-floating">Example multiple select</label>
                        <select multiple className="form-control" id="exampleSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleTextarea" className="bmd-label-floating">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile" className="bmd-label-floating">File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" />
                        <small className="text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                            Option one is this and that&mdash;be sure to include why it's great
    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                            Option two can be something else and selecting it will deselect option one
    </label>
                    </div>
                    <div className="radio disabled">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                            Option three is disabled
    </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /> Check me out
    </label>
                    </div>
                    <button className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-primary btn-raised">Submit</button>

                    <div className="form-group">
                        <label for="exampleInputEmail1" className="bmd-label-floating">Email address (two help blocks)</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                        <span className="bmd-help">We'll never share your email with anyone else.</span>
                        <span className="bmd-help">And this is probably from a second plugin showing in a non-optimal way</span>
                    </div>
                </form>


            </div>
        );
    }
}

export default NicePageBS;
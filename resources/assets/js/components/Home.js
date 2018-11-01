import React, {Component} from 'react';
import ReactDom from 'react-dom'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            username : '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return (
            <div className="flex-center position-ref full-height">
                <div className="content">
                    <div className="title m-b-md text-center">
                        E-Voting
                    </div>

                    <div className="col-md-8 col-md-offset-2">
                        <form>
                            <div className="form-group has-feedback">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" onChange={this.handleChange}/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                            </div>

                            <div className="form-group has-feedback">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" onChange={this.handleChange}/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>

                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDom.render(<Home/>, document.getElementById('example'));
}
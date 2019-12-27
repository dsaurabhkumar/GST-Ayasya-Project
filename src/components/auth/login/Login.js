import React from 'react';
import './Login.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userAuth:'',
            email:'',
            password:'',
            recheckPassword:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { email, password, userAuth, recheckPassword } = this.state
        return (
            <div className="container mt-5">
                <div className="loginContainer mb-5">
                    <h1 className="text-center mb-5">Login</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group row">
                            <label htmlFor="userAuth" className="col-md-4 col-form-label">User Authentication Required</label>
                            <div className="col-md-8">
                                <input
                                    type="userAuth"
                                    name="userAuth"
                                    className="form-control"
                                    placeholder="Y/N"
                                    value={userAuth}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-4 col-form-label">Email</label>
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your E-Mail"
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label">Password</label>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="recheckPassword" className="col-md-4 col-form-label">Recheck Password</label>
                            <div className="col-md-8">
                                <input
                                    type="recheckPassword"
                                    name="recheckPassword"
                                    className="form-control"
                                    placeholder="Enter your E-Mail"
                                    value={recheckPassword}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="loginBtn">
                            <button type="submit" className="btn btn-primary mt-3 mb-3 col-12 col-md-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

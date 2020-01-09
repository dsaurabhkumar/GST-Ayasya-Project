import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userAuth: '',
            email: '',
            password: '',
            recheckPassword: ''
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
                                    placeholder="Re-Check Password"
                                    value={recheckPassword}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row btnContainer flex-sm-row-reverse">
                            <div className="mt-3 col-12 col-md-4">
                                <button type="submit" className="btn btn-primary col-12">Login</button>
                            </div>
                            <div className="mt-3 col-12 col-md-4 align-self-center">
                                <Link to='/feature-options'><button type="submit" className="btn btn-primary col-12">Quit</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

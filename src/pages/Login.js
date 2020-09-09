import React, { Component } from 'react';
import { MDBCardText, MDBInput } from 'mdbreact';



class Login extends Component {
    render() {

        return (
            <div class="container-fluid bg3 main-image">
                <h1 className="text-right">
                    <a className="avi-text" href="#"><b>Home</b></a>
                    <button className="button1">Sign Up</button>
                </h1>
                <div class="row testute1">
                    <div class="card bg12 aviz">
                        <div class="card-body">
                            <div className="hide1">
                                <p>Some quick example text to build on the card title and make
                                sakfifvodoodod
                    </p>

                            </div>
                            <br />
                            <form >
                                <p className="h3 text-center mb-4">Login</p>
                                <div className="grey-text">
                                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                    <label class="custom-control-label" for="defaultUnchecked">Remember Me</label>

                                    <div className="avi-align">
                                        <a href="#!" className="blue-text ml-1"> Forgot Password?</a>
                                    </div>

                                </div>


                                <div className="text-center">

                                    <button className="signup-btn">Login</button>
                                </div>
                                <br />
                                <div class="separator">OR</div>
                                <br />

                                <MDBCardText className="text-left">Don't have an account?</MDBCardText>
                                <div className="text-center">
                                    <button className="login-btn">Sign Up</button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
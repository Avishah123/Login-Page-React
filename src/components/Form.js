import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';


class Form extends Component {
    render() {
        return (
            <MDBCard className="bg12" >
                <MDBCardBody>
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
                        <div className="text-center">
                            <MDBBtn color="primary" className="avi2">Login</MDBBtn>
                        </div>
                        <br />
                        <div class="separator">OR</div>
                        <br />

                        <MDBCardText className="text-left">Don't have an account?</MDBCardText>
                        <div className="text-center">
                            <MDBBtn className="avi2" color="warning">Sign Up</MDBBtn>
                        </div>
                    </form>

                    {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>

        );
    }
}

export default Form;
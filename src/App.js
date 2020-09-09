import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';








function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Login} />
      </div>


    </Router>


  );
}

export default App;

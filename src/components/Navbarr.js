import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaBars, FaSearch, FaGlobe, FaUser } from "react-icons/fa";

function Navbarr() {
  return (
    <Navbar  expand="lg" className='navbarr'>
      <Container fluid>

        {/* LEFT ICON */}
        <div className='left-icons navbarr'>
          <FaBars size={22} color="white" />
        </div>

        
        <Navbar.Brand href="#" className="ms-3">
          <img src='https://digitalhub.fifa.com/transform/befe3a64-328b-453c-8b58-0faeb9103684/FIFA_Logo_White_Generic?&io=transform:fill,height:128&quality=75' className="img" height="30"/> </Navbar.Brand>

        
        <Nav className='nav'>
          <Nav.Link className="list">TOURNOIS</Nav.Link>
          <Nav.Link className="list">MATCH CENTRE</Nav.Link>
          <Nav.Link className="list">L’ACTU</Nav.Link>
          <Nav.Link className="list">CLASSEMENTS</Nav.Link>
          <Nav.Link className="list">REGARDER SUR FIFA+</Nav.Link>
          <Nav.Link className="list">JOUER</Nav.Link>
          <Nav.Link className="list">BOUTIQUE</Nav.Link>
          <Nav.Link className="list">INSIDE FIFA</Nav.Link>
        </Nav>

        {/* RIGHT ICONS */}
        <div className="right-icons">
          <FaSearch className="user"/>
          <FaGlobe className="user" />
          <FaUser className="user" />
        </div>

      </Container>
    </Navbar>
  );
}

export default Navbarr;

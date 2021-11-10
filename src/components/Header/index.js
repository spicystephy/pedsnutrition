import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  
  <Navbar.Brand href="/">Peds Nutrition</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/philosophy">Philosophy</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/resources">Resources</Nav.Link>
      <Nav.Link href="/faqs">FAQ</Nav.Link>
      <Nav.Link href="/referrals">Referrals</Nav.Link>  
    </Nav>
    <Nav>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>

    // <nav className="nav-wrapper">
    // <nav className="nav-title">
    //   <Link
    //     to="/"
    //     className={
    //       window.location.pathname === "/"
    //         ? "navbar-item is-active"
    //         : "navbar-item"
    //     }
    //   >
    //     <p>Peds Nutrition, LLC.</p>
    //   </Link>
    //   </nav>
    //   <nav className="nav-pages">
    //     <Link
    //       to="/About"
    //       className={
    //         window.location.pathname === "/About"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>About Us</p>
    //     </Link>

    //     <Link
    //       to="/Philosophy"
    //       className={
    //         window.location.pathname === "/Philosophy"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>Our Philosophy</p>
    //     </Link>

    //     <Link
    //       to="/Services"
    //       className={
    //         window.location.pathname === "/Services"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>Our Services</p>
    //     </Link>

    //     <Link
    //       to="/Resources"
    //       className={
    //         window.location.pathname === "/Resources"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>Resources</p>
    //     </Link>

    //     <Link
    //       to="/Referrals"
    //       className={
    //         window.location.pathname === "/Referrals"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>Referrals</p>
    //     </Link>

    //     <Link
    //       to="/faqs"
    //       className={
    //         window.location.pathname === "/FAQs"
    //           ? "navbar-item is-active"
    //           : "navbar-item"
    //       }
    //     >
    //       <p>FAQ</p>
    //     </Link>
    //     </nav>
    //     <nav className="nav-contact">
    //       <Link
    //         to="/Contact"
    //         className={
    //           window.location.pathname === "/Contact"
    //             ? "navbar-item is-active"
    //             : "navbar-item"
    //         }
    //       >
    //         <p>Contact Us</p>
    //       </Link>
        
    //   </nav>
    // </nav>
  );
}

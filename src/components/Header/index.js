import React from "react";
import { Link } from "react-router-dom";

// import "./style.css";

export default function Header() {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className={
          window.location.pathname === "/"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Peds Nutrition, LLC.</p>
      </Link>

      <Link
        to="/About"
        className={
          window.location.pathname === "/About"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>About Us</p>
      </Link>

      <Link
        to="/Philosophy"
        className={
          window.location.pathname === "/Philosophy"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Our Philosophy</p>
      </Link>

      <Link
        to="/Services"
        className={
          window.location.pathname === "/Services"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Our Services</p>
      </Link>

      <Link
        to="/Resources"
        className={
          window.location.pathname === "/Resources"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Resources</p>
      </Link>

      <Link
        to="/Referrals"
        className={
          window.location.pathname === "/Referrals"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Referrals</p>
      </Link>

      <Link
        to="/faqs"
        className={
          window.location.pathname === "/FAQs"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>FAQ</p>
      </Link>

      <Link
        to="/Contact"
        className={
          window.location.pathname === "/Contact"
            ? "navbar-item is-active"
            : "navbar-item"
        }
      >
        <p>Contact Us</p>
      </Link>

      {/* Navbar that includes Peds Nutrition, LLC left; pages centered; fb and insta icons; Contact Us btn */}
    </nav>
  );
}

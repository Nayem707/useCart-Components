import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../exmple/context/global/ThemProvider";
// React bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// React Icons
import { BiSun, BiCart, BiMoon } from "react-icons/bi";
// React Router Link
import { Link } from "react-router-dom";
//useCart From npm Docs
import { useCart } from "react-use-cart";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setDarkMode(darkMode);
  }, [darkMode]);

  const { isEmpty, totalItems } = useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 50 }}>
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}>
            <b>E-commerce</b>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-item-center mt-2`}>
              <BiCart size="2rem" />
              {!isEmpty && (
                <span
                  style={{
                    position: "relative",
                    left: "-10px",
                    top: "-10px",
                  }}>
                  {totalItems}
                </span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

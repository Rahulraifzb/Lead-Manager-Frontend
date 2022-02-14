import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = false;
  return (
    <div>
      <Navbar color="light" expand="md" light >
        <NavbarBrand href="/">Lead Manager</NavbarBrand>
        <Collapse navbar className="d-flex justify-content-end">
          <Nav className="ml-auto">
            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <NavItem>
                  <strong className="me-3">Welcome' Rahul</strong>
                </NavItem>
                <NavItem>
                    <Button color="danger" outline>Logout</Button>
                </NavItem>
              </div>
            ) : (
              <>
                <NavItem className="mx-4">
                  <Link to="/login" className="text-decoration-none">Login</Link>
                </NavItem>
                <NavItem>
                  <Link to="/register" className="text-decoration-none">Register</Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

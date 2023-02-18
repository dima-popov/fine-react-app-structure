import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";

const CustomNavLink = styled(NavLink)`
  &.active {
    color: white !important;
  }

  padding: 4px;
`;
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            {" "}
            <img src={logo} className="App-logo" alt="logo" width="50" />
          </Navbar.Brand>

          <Nav className="me-auto">
            <CustomNavLink
              to="main"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {" "}
              Main
            </CustomNavLink>
            <CustomNavLink
              to="example/1"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Example 1
            </CustomNavLink>
            <CustomNavLink
              to="example/2"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Example 2
            </CustomNavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

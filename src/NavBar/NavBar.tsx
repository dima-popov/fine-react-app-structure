import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";

const NavWrap = styled.div`
  .active {
    color: white !important;
  }
  a {
    padding: 4px;
  }
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
            <NavWrap>
              <NavLink
                to="main"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {" "}
                Main
              </NavLink>
              <NavLink
                to="example/1"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Example 1
              </NavLink>
              <NavLink
                to="example/2"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Example 2
              </NavLink>
            </NavWrap>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

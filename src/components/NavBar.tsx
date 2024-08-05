import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #131312;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default NavBar;

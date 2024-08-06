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
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #fee192; /* Change text color on hover */
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #fee192; /* Underline color */
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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

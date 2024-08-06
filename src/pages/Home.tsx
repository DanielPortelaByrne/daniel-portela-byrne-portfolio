import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import logo from "../assets/name_logo.png";
import headshot from "../assets/headshot.png"; // Import the headshot image

const Hero = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Logo = styled.img`
  width: 550px; /* Adjust size as needed */
  margin-bottom: 1rem;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Skill = styled.div`
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 8px;
  color: #1e1e1e;
`;

// Create a styled component for the headshot image with fixed positioning
const Headshot = styled.img`
  position: fixed;
  left: 5%; /* Adjust the left position as needed */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */
  width: 400px; /* Adjust size as needed */
  z-index: 10; /* Ensure it appears above other elements */
`;

const Home: React.FC = () => {
  return (
    <>
      <Headshot src={headshot} alt="Headshot" /> {/* Add the headshot image */}
      <Hero>
        <Logo src={logo} alt="My Logo" />
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm Daniel!
        </motion.h1>
        <p>
          Senior Associate Software Engineer passionate about UI Development.
        </p>
        <Skills>
          <Skill>JavaScript</Skill>
          <Skill>React</Skill>
          <Skill>TypeScript</Skill>
          <Skill>CSS</Skill>
          <Skill>Node.js</Skill>
        </Skills>
        <Link to="/projects">Check out my projects</Link>
      </Hero>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import logo from "../assets/name_logo.png";
import headshot from "../assets/headshot.png"; // Import the headshot image

// Define keyframes for the rainbow animation
const rainbowAnimation = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;

// Define keyframes for the pulsing effect
const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

// Create a styled component for the logo with animation
const Logo = styled.img`
  width: 550px; /* Adjust size as needed */
  margin-bottom: 1rem;
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;

  /* Inject keyframes into the component */
  ${rainbowAnimation}
  ${pulseAnimation}

  &:hover {
    animation: rainbow 1s linear infinite, pulse 1s ease-in-out infinite;
  }
`;

const Hero = styled.div`
  text-align: center;
  padding: 2rem;
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

import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CVLink = styled.a`
  color: #fee192;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <p>
        I'm a Senior Associate Software Engineer with a passion for UI
        development. I studied computer science at UCD and have experience in
        production support and software engineering roles. My goal is to
        transition into a UI developer role in London to pursue my passion for
        front-end development.
      </p>
      <p>
        In my spare time, I enjoy working on side projects like building mobile
        apps with React Native and web applications with React.js. I am
        continuously learning and improving my skills to create visually
        appealing and user-friendly interfaces.
      </p>
      <CVLink
        href="../assets/DanielPortelaByrneCV2024.pdf"
        download="DanielPortelaByrneCV2024.pdf"
      >
        Download My CV
      </CVLink>
    </Container>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import planningPoker from "../assets/planning-poker-image.png";
import partyPopulist from "../assets/party-populist-image.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const ProjectStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px; /* Adjust this value as needed */
  width: 100%;
`;

const ProjectCard = styled.div`
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: black; /* Set the color of h3 text to black */
    margin: 0.5rem 0; /* Adjust margin if needed */
  }

  p {
    color: black; /* Set the color of p text to black */
    margin: 0; /* Adjust margin if needed */
  }
`;

const ProjectImage = styled.img`
  width: 250px; /* Adjust size as needed */
  height: auto;
  border-radius: 8px;
  margin-right: 1rem; /* Space between image and text */
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center text vertically */
`;

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Party Game App",
      image: partyPopulist,
      link: "https://apps.apple.com/pl/app/party-populist/id1669272602",
    },
    {
      title: "Planning Poker Website",
      image: planningPoker,
      link: "https://planning-poker-pointing-9f9b8406bb5e.herokuapp.com/",
    },
  ];

  return (
    <Container>
      <ProjectStack>
        {projectList.map((project) => (
          <ProjectCard key={project.title}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectText>
                <h3>{project.title}</h3>
                <p>Short description of the project.</p>
              </ProjectText>
            </Link>
          </ProjectCard>
        ))}
      </ProjectStack>
    </Container>
  );
};

export default Projects;

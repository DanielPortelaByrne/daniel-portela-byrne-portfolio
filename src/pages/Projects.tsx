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
  flex-direction: row;
  gap: 2rem;
  max-width: 1600px; /* Adjust this value as needed */
  width: 100%;
`;

interface ProjectCardProps {
  layout: string;
}

const ProjectCard = styled.div<ProjectCardProps>`
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;

  display: flex;
  flex-direction: ${(props) => (props.layout === "row" ? "row" : "column")};
  align-items: ${(props) => (props.layout === "row" ? "center" : "flex-start")};

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: black; /* Set the color of h3 text to black */
    margin: 0.5rem 0; /* Adjust margin if needed */
  }

  h4 {
    color: black; /* Set the color of h4 text to black */
    margin: 0.5rem 0; /* Adjust margin if needed */
  }

  p {
    color: black; /* Set the color of p text to black */
    margin: 0; /* Adjust margin if needed */
  }
`;

interface ProjectImageProps {
  layout: string;
}

const ProjectImage = styled.img<ProjectImageProps>`
  width: ${(props) =>
    props.layout === "row" ? "450px" : "100%"}; /* Adjust size as needed */
  height: auto;
  border-radius: 8px;
  margin-right: ${(props) =>
    props.layout === "row" ? "1rem" : "0"}; /* Space between image and text */
  margin-bottom: ${(props) =>
    props.layout === "column"
      ? "1rem"
      : "0"}; /* Space below image in column layout */
`;

interface ProjectTextProps {
  layout: string;
}

const ProjectText = styled.div<ProjectTextProps>`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center text vertically */
  text-align: "center"; /* Align text left for row layout */
`;

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Party Game App",
      image: partyPopulist,
      link: "https://apps.apple.com/pl/app/party-populist/id1669272602?platform=iphone",
      description:
        "I saw a hole in the market for an Irish party game. Most party game mobile apps are famously American which is hard to relate to being from Ireland." +
        " I wanted to use this as an opportunity to take on the huge challenge of creating a functioning and intuitive party game experience, which specifically caters to other cultures outside of America." +
        " It even has Gaeilge (Irish) as a supported language! This project is ongoing and took around 1.5 years to get to the point its at now",
      languages: "React Native, Typescript, CSS, Expo",
      layout: "row",
    },
    {
      title: "Planning Poker Website",
      image: planningPoker,
      link: "https://planning-poker-pointing-9f9b8406bb5e.herokuapp.com/",
      description:
        "The inspiration for this project came from my current scrum team's choice of planning poker website's free trial ending. Going back to the old school method of holding up fingers didn't really sit well with me." +
        "So I decided to challenge myself to build a new planning tool for my team and eventually my whole organisation to use, in a weekend." +
        "This project is ongoing with continued support and updates from any bugs or feedback given from any scrum teams within my workplace.",
      languages: "React.js, Javascript, CSS, HTML, Node.js",
      layout: "column",
    },
  ];

  return (
    <Container>
      <ProjectStack>
        {projectList.map((project) => (
          <ProjectCard key={project.title} layout={project.layout}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage
                src={project.image}
                alt={project.title}
                layout={project.layout}
              />
              <ProjectText layout={project.layout}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.languages && (
                  <h4>Languages/Frameworks: {project.languages}</h4>
                )}
              </ProjectText>
            </Link>
          </ProjectCard>
        ))}
      </ProjectStack>
    </Container>
  );
};

export default Projects;

import { useState } from "react";
const gif =
  "/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f466172616d612d466f756e646174696f6e2f47796d6e617369756d2f6d61696e2f67796d6e617369756d2d746578742e706e67.png";
const robotics = "/apollolab.png";
const brain = "/neuroimage.png";
const shap = "/shap.png";
const paper = "/ML_risk_taking_supp_final.pdf";
const ramen = "/ramen.png";
const yaleclubs = "/yaleclubs.png";
import "./HomePage.css";
import "./Courses.css";
import "../index.css";

const Experience = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set()
  );

  const handleToggle = (index: number) => {
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // Remove if already expanded
      } else {
        newSet.add(index); // Add if not expanded
      }
      return newSet;
    });
  };

  return (
    <div>
      <h1>These are some experiences I've had!</h1>

      <h2
        onClick={() => handleToggle(1)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Ramen Inc.
      </h2>

      {!expandedIndices.has(1) && (
        <img
          src={ramen}
          className="img-rounded"
          alt="SWE Intern"
          style={{
            width: "100%", // Set width
            height: "120px", // Set height
            objectFit: "cover", // Ensure the image covers the area without distortion
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Software Engineering Intern</p>
        <p>May 2025 – Present</p>
      </span>

      {expandedIndices.has(1) && (
        <div>
          <p className="slide-in-from-left">
            I engineered modular multi-step AI agents using MLflow, OpenAI APIs,
            and LangChain to deliver dynamic UI features such as user-adaptive
            components as well as allowing for users to access real-time
            diagnostics. I tested and deployed AI agents with PostgreSQL,
            Kubernetes, and Docker, emphasizing stability and output coherence
            through automated testing of agent behavior against database state
            and system performance metrics.
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(2)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Yale Computer Society
      </h2>

      {!expandedIndices.has(2) && (
        <img
          src={yaleclubs}
          className="img-rounded"
          alt="Yale Clubs"
          style={{
            width: "100%", // Set width
            height: "120px", // Set height
            objectFit: "cover", // Ensure the image covers the area without distortion
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Lead Software Engineer for Yale Clubs</p>
        <p>Sept 2024 – Present</p>
      </span>

      {expandedIndices.has(2) && (
        <div>
          <p className="slide-in-from-left">
            I produced club management webpage and other foundational features
            with secure student authorization using TypeScript, React.js, and
            CAS, reducing administrative workload and ensuring data protection
            for 6,000+ users. I designed an AI-powered event verification tool
            using OpenAI APIs, Node.js, and MongoDB, integrated with JWT
            authentication, enabling secure and scalable event submissions
            beyond club activities, increasing user engagement.
          </p>
          <a
            href="https://yaleclubs.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <p className="slide-in-from-left">Visit Yale Clubs</p>
          </a>
        </div>
      )}

      <h2
        onClick={() => handleToggle(3)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Yale Department of Computer Science
      </h2>

      {!expandedIndices.has(3) && (
        <img
          src={robotics}
          className="img-rounded"
          alt="Yale Robotics Research"
          style={{
            width: "100%", // Set width
            height: "120px", // Set height
            objectFit: "cover", // Ensure the image covers the area without distortion
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Undergraduate Research Intern under Prof. Danny Rakita</p>
        <p>Sept 2023 – Present</p>
      </span>

      {expandedIndices.has(3) && (
        <div>
          <p className="slide-in-from-left">
            <strong>Project 1: Diffusion Policy for Manipulation</strong> - I
            implemented diffusion policy, reinforcement learning (RL), and
            behavioral cloning script on models trained by GANs using ROS,
            PyTorch, and Python on dual robotic arms, optimizing viewpoints and
            object manipulation to achieve a 90% success rate across various
            movements.
          </p>
          <p className="slide-in-from-left">
            <strong>
              Project 2: Robotics Generative AI Reinforcement Learning Pipeline
            </strong>{" "}
            - I used OpenRouter, PyTorch, and OpenAI Gymnasium to develop an
            agentic reward generation and task analysis pipeline to allow for
            autonomous RL capabilities and integrated ROS within a virtual
            environment with efficient publisher and subscriber nodes.
          </p>
          <a
            href="https://pypi.org/project/gymnasium/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }} // Ensure the link behaves like a block element
          >
            <img
              src={gif}
              className="img-rounded slide-in-from-left"
              alt="Yale Robotics Research"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>
          <p></p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(4)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Center for Functional Neuroimaging, University of Pennsylvania
      </h2>

      {!expandedIndices.has(4) && (
        <img
          src={brain}
          className="img-rounded"
          alt="Brain Research"
          style={{
            width: "100%", // Set width
            height: "120px", // Set height
            objectFit: "cover", // Ensure the image covers the area without distortion
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Intern Researcher</p>
        <p>Jun 2022 – Aug 2023</p>
      </span>
      {expandedIndices.has(4) && (
        <div>
          <p className="slide-in-from-left">
            I led a project analyzing the relationship between risk tolerance
            and brain gray matter volume under Professor Hengyi Rao, presented
            at the Organization for Human Brain Mapping Conference in August
            2023. I utilized machine learning techniques including random
            forests, support vector regression, multivariable linear regression,
            and a generalized additive model. Implementing SHAP, a game
            theory-based model, I confirmed a previous finding on the
            cerebellum's importance in predicting risk tolerance. This research
            reflects my continued interest in applying advanced machine learning
            techniques to uncover insights in neuroscience.
          </p>
          <img
            src={shap}
            className="img-rounded slide-in-from-left"
            alt="shap"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          <a href={paper} target="_blank" rel="noopener noreferrer">
            <p className="slide-in-from-left">View the full paper</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Experience;

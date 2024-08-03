import { useState } from "react";
import gif from "../assets/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f466172616d612d466f756e646174696f6e2f47796d6e617369756d2f6d61696e2f67796d6e617369756d2d746578742e706e67.png";
import robotics from "../assets/Screenshot 2024-08-02 at 11.48.09 PM.png";
import brain from "../assets/Screenshot 2024-08-02 at 11.50.13 PM.png";
import shap from "../assets/shap.png";
import paper from "../assets/ML_risk_taking_supp_final.pdf";
import "./HomePage.css";
import "./Courses.css";

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
        Apollo Lab, Yale University
      </h2>

      {!expandedIndices.has(1) && (
        <img
          src={robotics}
          className="img-rounded"
          alt="Apollo Lab Research"
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
        <p>Undergraduate Researcher</p>
        <p>Sept 2023 – present</p>
      </span>

      {expandedIndices.has(1) && (
        <div>
          <p>
            I have some exposure with machine learning/computer vision
            techniques gaussian splatting and NeRF models. I also have done
            research with decision transformers and diffusion policy, as well as
            more traditional reinforcement learning (RL) techniques such as
            behavioral cloning (BC). I have helped develop scripts with decision
            transformers and BC, and I'm continually interested in deep RL and
            its larger impacts on robotics. Over this past summer I developed an
            enviroment utilizing the OpenAI gym and mujoco (a physics renderer)
            packages to help train a dual arm robot with a viewpoint arm and a
            tactile arm to open a microwave.
          </p>
          <a
            href="https://pypi.org/project/gymnasium/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }} // Ensure the link behaves like a block element
          >
            <img
              src={gif}
              className="img-rounded"
              alt="Apollo Lab Research"
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
        onClick={() => handleToggle(2)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Center for Functional Neuroimaging, University of Pennsylvania
      </h2>

      {!expandedIndices.has(2) && (
        <img
          src={brain}
          className="img-rounded"
          alt="Apollo Lab Research"
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
      {expandedIndices.has(2) && (
        <div>
          <p>
            I led a project analyzing the relationship between risk tolerance
            and brain gray matter volume under Professor Hengyi Rao, presented
            at the Organization for Human Brain Mapping Conference in August
            2023. I utilized machine learning techniques including random
            forests, support vector regression, multivariable linear regression,
            and a generalized additive model. Implementing SHAP, a game
            theory-based model, I confirmed a previous finding on the
            cerebellum’s importance in predicting risk tolerance. This research
            reflects my continued interest in applying advanced machine learning
            techniques to uncover insights in neuroscience.
          </p>
          <img
            src={shap}
            className="img-rounded"
            alt="shap"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          <a href={paper} target="_blank" rel="noopener noreferrer">
            View the full paper
          </a>
        </div>
      )}
    </div>
  );
};

export default Experience;

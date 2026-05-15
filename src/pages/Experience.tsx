import { useState } from "react";
const gif =
  "/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f466172616d612d466f756e646174696f6e2f47796d6e617369756d2f6d61696e2f67796d6e617369756d2d746578742e706e67.png";
const robotics = "/apollolab.png";
const brain = "/neuroimage.png";
const shap = "/shap.png";
const paper = "/ML_risk_taking_supp_final.pdf";
const ramen = "/ramen.png";
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
        onClick={() => handleToggle(0)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Databricks
      </h2>

      <p></p>

      <span className="flex-center">
        <p>Software Engineering Intern</p>
        <p>May 2026 – Aug 2026</p>
      </span>

      {expandedIndices.has(0) && (
        <div>
          <p className="slide-in-from-left">
            Incoming intern on a data replication platform team building ELT
            pipelines that extract data from MySQL/TiDB sources and load
            analytical Delta Lake tables for internal analytics, monitoring, and
            reporting. Developing an agentic operations platform for pipeline
            health monitoring, root cause analysis, oncall assistance, and
            lightweight mitigation across CDC, Kafka, Spark streaming, and Delta
            Lake infrastructure.
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(1)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Ramen Inc. <span style={{ fontSize: "0.65em", fontWeight: "normal", opacity: 0.6 }}>(Series A)</span>
      </h2>

      {!expandedIndices.has(1) && (
        <img
          src={ramen}
          className="img-rounded"
          alt="SWE Intern"
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Software Engineering Intern</p>
        <p>May 2025 – July 2025</p>
      </span>

      {expandedIndices.has(1) && (
        <div>
          <p className="slide-in-from-left">
            I tested and engineered modular multi-step AI agents using MLflow,
            RAG pipelines, and ChromaDB to power user-adaptive UI components,
            boosting diagnostic engagement by 50% and reducing time-to-diagnosis
            by 35%. I deployed AI agents with PostgreSQL, Kubernetes, and Docker,
            achieving 99.9% system uptime and enhancing output coherence through
            automated behavior validation against live database state and
            performance benchmarks.
          </p>
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
            width: "100%",
            height: "120px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <p></p>

      <span className="flex-center">
        <p>Undergraduate Research Intern under Prof. Danny Rakita</p>
        <p>Sept 2023 – Dec 2025</p>
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
            - I developed a high-throughput, autonomous reward-generation and
            task-analysis pipeline with PyTorch, ROS (publisher/subscriber
            nodes), and OpenAI Gymnasium, enabling continuous RL training in a
            virtual environment and reducing manual intervention by 25%.
          </p>
          <a
            href="https://pypi.org/project/gymnasium/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
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

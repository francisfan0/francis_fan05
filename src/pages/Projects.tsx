import "./Projects.css";
import "../index.css";
// import stockgraph from "../assets/Screenshot 2024-08-03 at 10.59.12 PM.png";
import gif from "../assets/individualImage (1).gif";
import fitness1 from "../assets/Screenshot 2024-08-03 at 11.27.51 PM.png";
import fitness2 from "../assets/Screenshot 2024-08-03 at 11.29.13 PM.png";

const Projects: React.FC = () => {
  return (
    <div>
      <h1>These are some projects I have undertaken!</h1>
      <div className="py-4">
        <div className="project-item">
          <h2
            className="text-hover-underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#avenue"
          >
            Avenue
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Redis</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>React</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Node.js</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Firecrawl</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">Feb 2025 - Present</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="avenue"
          tabIndex={-1}
          aria-labelledby="avenueModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Avenue</code>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  I developed a price comparison web application and Chrome extension for finding related products at a lower price with optimized result caching using Redis for fast, repeatable user queries with affiliate link APIs to monetize referrals. I implemented AI-driven product matching using natural language embeddings and fuzzy search and Firecrawl for dynamic web crawling and HTML parsing to extract product metadata and pricing across multiple vendors.
                </p>
                <a
                  href="https://app.avenuesaves.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Avenue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h2
            className="text-hover-underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#brain"
          >
            Brain Matter Data Analysis
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>SHAP</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Random Forests</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>SVM</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>MLR</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">June 2022 - Aug 2023</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="brain"
          tabIndex={-1}
          aria-labelledby="brainModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Brain Matter Data Analysis</code>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  I utilized an interpretable model to quantify and confirm the cerebellum's importance in predicting risk tolerance and evaluated the performance of several machine learning techniques using 1000 runs of 10-fold cross-validation. I published work using machine learning to assess the relationship between risk tolerance and brain gray matter volume as first author, and presented at the Organization for Human Brain Mapping (OHBM) Conference 2023.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h2
            className="text-hover-underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#fitness"
          >
            Fit4Lyfe
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>MongoDB</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Express</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>React</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Node.js</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>JWT</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">Jan 2024 - July 2024</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="fitness"
          tabIndex={-1}
          aria-labelledby="fitnessModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Fit4Lyfe</code>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  I created a full-stack web app to track workouts, visualize progress, and integrated AI insights for better training. I deployed the app on Render, serving 100+ users and 10,000+ data points through clean UI and optimized backend.
                </p>
                <p>Log page:</p>
                <img
                  src={fitness1}
                  className="img-rounded"
                  alt="graph"
                  style={{
                    width: "100%", // Set width
                    height: "100%", // Set height
                    objectFit: "cover", // Ensure the image covers the area without distortion
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <p>Chat page:</p>
                <img
                  src={fitness2}
                  className="img-rounded"
                  alt="graph"
                  style={{
                    width: "100%", // Set width
                    height: "100%", // Set height
                    objectFit: "cover", // Ensure the image covers the area without distortion
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div className="inline-container">
                  <a
                    href="https://fitnesswebappai.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    website
                  </a>
                  <p className="leftspacing">.</p>
                  <a
                    href="https://github.com/francisfan0/fitnesswebapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <h2
            className="text-hover-underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#robot"
          >
            Robotics Environment
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Mujoco</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Pytorch</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Gym</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>OpenCV</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">July 2024</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="robot"
          tabIndex={-1}
          aria-labelledby="robotModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Robotics Environment</code>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  This was quite challenging since I was not altogether too
                  familiar with the codebase or with the packages and tools we
                  used in this project, so it took a while for me to get the
                  project off the ground, but it was quite fun in the end since
                  the simulator was extremely visual, so it was easy to see what
                  was happening and how all of the code was affecting the
                  environment. This was also quite rewarding because I was able
                  to see that the robot actually learned the policy from the
                  training, and although it was a simple task, it solidified our
                  results.
                </p>
                <img
                  src={gif}
                  className="img-rounded"
                  alt="graph"
                  style={{
                    width: "100%", // Set width
                    height: "100%", // Set height
                    objectFit: "cover", // Ensure the image covers the area without distortion
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <a
                  href="https://diffusion-policy.cs.columbia.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the paper that inspired us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

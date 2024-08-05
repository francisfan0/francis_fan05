import "./Projects.css";
import "../index.css";
import stockgraph from "../assets/Screenshot 2024-08-03 at 10.59.12 PM.png";
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
            data-bs-target="#stock"
          >
            Stock Picker
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
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
                  <code>Scikit-Learn</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>BERT</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">April 2023</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="stock"
          tabIndex={-1}
          aria-labelledby="stockModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Stock Picker</code>
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
                  This was my first self-guided exploration into machine
                  learning, and I had a lot of fun combining my interest in the
                  stock market with my interest in natural language procressing
                  (NLP). My goal was to classify tweet sentiment and use that to
                  gain extra parameters to invest in the stock market. I started
                  with somewhat crude NLP techniques like using the NLTK library
                  to use Vader scores to classify tweet sentiment, to using BERT
                  (I hadn't thought to use OpenAI's ChatGPT at the time).
                  Although I believe the results are a bit contrived due to the
                  small sample data, I think it was a good first attempt at
                  applying NLP.
                </p>
                <img
                  src={stockgraph}
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
                  href="https://github.com/francisfan0/stockpicker/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to see my code
                </a>
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

        <div className="project-item">
          <h2
            className="text-hover-underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#fitness"
          >
            fitness_log
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>MERN</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>jwt</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>groq</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>recharts</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>bcryptjs</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">July 2024</p>
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
                  <code>fitness_log</code>
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
                  This is the first full-stack project I have made, and it was
                  based off of a tutorial by Chris Blakely. He made a clone of
                  booking.com, but I've always wanted to make a fitness app, so
                  I pivoted away from his tutorial to make the app. I based my
                  user login off of his tutorial though, and learned a lot of
                  full-stack principles. Although it's not super ML involved, I
                  thought that the addition of groq-api to add an ai assistant
                  was a nice touch.
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
            data-bs-target="#math"
          >
            Math Game
          </h2>
          <div className="project-details">
            <div className="inline-container flex-center">
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>SERN</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>Typescript</code>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm button-spacing"
                >
                  <code>SQL</code>
                </button>
              </div>
              <p className="strong-spacing text-secondary">August 2024</p>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="math"
          tabIndex={-1}
          aria-labelledby="mathModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <code>Math Game</code>
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
                  I'm currently developing this with a friend, and it will be
                  based on popular mental maths website zetamac but with more
                  features.
                </p>
                <a
                  href="https://arithmetic.zetamac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  zetamac
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

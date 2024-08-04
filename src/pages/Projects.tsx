import { useState } from "react";
import "./Courses.css";

const Projects = () => {
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
      <h1>These are some projects I have undertaken!</h1>

      <h2
        onClick={() => handleToggle(1)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Stock Picker
      </h2>
      {expandedIndices.has(1) && (
        <div>
          <p>
            <ul>
              <li>CPSC 474: Computational Intelligence for Games</li>
              <li>
                CPSC 323: Intro to Systems Programming <br></br>
                and Computer Organization
              </li>
              <li>S&DS 241: Probability Theory</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(2)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Robotics Environment
      </h2>
      {expandedIndices.has(2) && (
        <div>
          <p>
            <ul>
              <li>CPSC 223: Data Structures and Programming Techniques</li>
              <li>CPSC 201: Intro to Computer Science</li>
              <li>CPSC 381: Intro to Machine Learning</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(3)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        fitness_log
      </h2>
      {expandedIndices.has(3) && (
        <div>
          <p>
            <ul>
              <li>S&DS 230: Data Exploration and Analysis</li>
              <li>MATH 120: Multivariable Calculus</li>
              <li>MATH 244: Discrete Math</li>
              <li>MATH 225: Linear Algebra</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(5)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Math Game
      </h2>
      {expandedIndices.has(5) && (
        <div>
          <p>
            <ul>
              <li>ECON 121: Intermediate Microeconomics</li>
              <li>LITR 020: World Literature After Empire</li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;

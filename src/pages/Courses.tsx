import { useState } from "react";
import "./Courses.css";
import "../index.css";

const Courses = () => {
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
      <h1>These are some courses I've taken!</h1>
      <p>
        <code>curr gpa: 3.96</code>
      </p>

      <h2
        onClick={() => handleToggle(1)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Current slate of classes
      </h2>
      {expandedIndices.has(1) && (
        <div>
          <p>
            <ul className="list-container">
              <li>CPSC 4390: Software Engineering</li>
              <li>
                CPSC 4470: Quantum Computing
              </li>
              <li>CPSC 4210: Compilers</li>
              <li>LING 2340: Quantitative Linquistics</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(2)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        CS classes
      </h2>
      {expandedIndices.has(2) && (
        <div>
          <p>
            <ul className="list-container">
              <li>CPSC 223: Data Structures and Programming Techniques</li>
              <li>CPSC 201: Intro to Computer Science</li>
              <li>CPSC 381: Intro to Machine Learning</li>
              <li>CPSC 474: Computational Intelligence for Games</li>
              <li>
                CPSC 323: Intro to Systems Programming <br></br>
                and Computer Organization
              </li>
              <li>CPSC 365: Algorithms</li>
              <li>CPSC 424: Parallel Computing</li>
              <li>PHYS 345: Quantum Information Processing</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(3)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Math classes
      </h2>
      {expandedIndices.has(3) && (
        <div>
          <p>
            <ul className="list-container">
              <li>S&DS 230: Data Exploration and Analysis</li>
              <li>MATH 120: Multivariable Calculus</li>
              <li>MATH 244: Discrete Math</li>
              <li>MATH 225: Linear Algebra</li>
              <li>MATH 255: Analysis</li>
              <li>S&DS 241: Probability Theory</li>
              <li>S&DS 242: Theory of Statistics</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(5)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        Misc. classes
      </h2>
      {expandedIndices.has(5) && (
        <div>
          <p>
            <ul className="list-container">
              <li>ECON 121: Intermediate Microeconomics</li>
              <li>LITR 020: World Literature After Empire</li>
              <li>CHNS 142: Heritage Chinese</li>
              <li>CHNS 200: The Chinese Tradition</li>
            </ul>
          </p>
        </div>
      )}

      <h2
        onClick={() => handleToggle(4)}
        style={{ cursor: "pointer" }}
        className="text-hover-gray"
      >
        High School
      </h2>
      {expandedIndices.has(4) && (
        <div>
          <p>
            <ul className="list-container">
              <li>AP Lit: 5</li>
              <li>AP Physics C E&M: 5</li>
              <li>AP Psych: 5</li>
              <li>AP Stat: 5</li>
              <li>AP CSA: 5</li>
              <li>AP Lang: 5</li>
              <li>AP Micro: 5</li>
              <li>AP Macro: 5</li>
              <li>AP Physics C Mechanics: 5</li>
              <li>AP US History: 5</li>
              <li>AP Calc BC: 5</li>
              <li>AP Chem: 5</li>
              <li>AP CSP: 5</li>
              <li>AP Chinese: 5</li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;

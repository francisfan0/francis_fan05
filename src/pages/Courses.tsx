import { useState } from "react";
import "./Courses.css";

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
        <code>curr gpa: 4.0</code>
      </p>

      <h2 onClick={() => handleToggle(1)} style={{ cursor: "pointer" }}>
        Current slate of classes
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

      <h2 onClick={() => handleToggle(2)} style={{ cursor: "pointer" }}>
        CS classes
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

      <h2 onClick={() => handleToggle(3)} style={{ cursor: "pointer" }}>
        Math classes
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

      <h2 onClick={() => handleToggle(5)} style={{ cursor: "pointer" }}>
        Misc. classes
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

      <h2 onClick={() => handleToggle(4)} style={{ cursor: "pointer" }}>
        High School
      </h2>
      {expandedIndices.has(4) && (
        <div>
          <p>
            <ul>
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

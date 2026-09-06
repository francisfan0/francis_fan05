"use client";

import { useState } from "react";
import ExpandToggle from "../components/ExpandToggle";
import "./Courses.css";
import "../index.css";

type TranscriptCourse = {
  code: string;
  title: string;
  grade: string;
};

type TranscriptTerm = {
  name: string;
  gpa?: string;
  courses: TranscriptCourse[];
};

const transcript: TranscriptTerm[] = [
  {
    name: "Fall 2023",
    gpa: "4.00",
    courses: [
      { code: "CPSC 201", title: "Intro to Computer Science", grade: "A" },
      { code: "ECON 121", title: "Intermediate Microeconomics", grade: "A" },
      { code: "LITR 020", title: "World Literature After Empire", grade: "A" },
      { code: "MATH 120", title: "Calculus: Functions of Several Variables", grade: "A" },
    ],
  },
  {
    name: "Spring 2024",
    gpa: "4.00",
    courses: [
      { code: "AMTH 244", title: "Discrete Mathematics", grade: "A" },
      { code: "CPSC 223", title: "Data Structures & Programming Techniques", grade: "A" },
      { code: "CPSC 381", title: "Introduction to Machine Learning", grade: "CR" },
      { code: "MATH 225", title: "Linear Algebra", grade: "A" },
      { code: "S&DS 230", title: "Data Exploration and Analysis", grade: "A" },
    ],
  },
  {
    name: "Fall 2024",
    gpa: "3.93",
    courses: [
      { code: "CPSC 323", title: "Systems Programming & Computer Organization", grade: "A" },
      { code: "CPSC 474", title: "Computational Intelligence for Games", grade: "A" },
      { code: "EALL 200", title: "The Chinese Tradition", grade: "A" },
      { code: "MATH 255", title: "Analysis 1", grade: "A" },
      { code: "S&DS 241", title: "Probability Theory", grade: "A-" },
    ],
  },
  {
    name: "Spring 2025",
    gpa: "3.94",
    courses: [
      { code: "CHNS 142", title: "Intermediate Modern Chinese for Heritage Speakers", grade: "A" },
      { code: "CPSC 365", title: "Algorithms", grade: "A" },
      { code: "CPSC 424", title: "Parallel Programming Techniques", grade: "A" },
      { code: "PHYS 345", title: "Intro to Quantum Information", grade: "A" },
      { code: "S&DS 242", title: "Theory of Statistics", grade: "A-" },
    ],
  },
  {
    name: "Fall 2025",
    gpa: "4.00",
    courses: [
      { code: "CPSC 4270", title: "Advanced C++ Programming", grade: "CR" },
      { code: "CPSC 4470", title: "Intro to Quantum Computing", grade: "A" },
      { code: "CPSC 5210", title: "Compilers and Interpreters", grade: "A" },
      { code: "HSAR 3290", title: "Arts of the Silk Road", grade: "A" },
    ],
  },
  {
    name: "Spring 2026",
    gpa: "3.93",
    courses: [
      { code: "CPSC 5150", title: "Law and Large Language Models", grade: "A" },
      { code: "CPSC 5230", title: "Operating Systems Design & Implementation", grade: "A-" },
      { code: "CPSC 5371", title: "Database Design & Implementation", grade: "A" },
      { code: "CPSC 5391", title: "Advanced Software Engineering", grade: "A" },
      { code: "ENGL 1020", title: "Reading & Writing the Modern Essay", grade: "A" },
    ],
  },
  {
    name: "Fall 2026",
    courses: [
      { code: "ART 1514", title: "Basic Drawing", grade: "IP" },
      { code: "CPSC 4800", title: "Intro to Computer Vision", grade: "IP" },
      { code: "CPSC 4900", title: "Senior Project", grade: "IP" },
      { code: "CPSC 5260", title: "Building Distributed Systems", grade: "IP" },
      { code: "PLSC 2600", title: "Game Theory & Political Science", grade: "IP" },
    ],
  },
];

const Courses = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set()
  );

  const handleToggle = (index: number) => {
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
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

      <ExpandToggle
        controlsId="courses-current"
        expanded={expandedIndices.has(1)}
        onToggle={() => handleToggle(1)}
      >
        Current slate of classes
      </ExpandToggle>
      {expandedIndices.has(1) && (
        <ul id="courses-current" className="list-container">
          <li>ART 1514: Basic Drawing</li>
          <li>CPSC 4800: Intro to Computer Vision</li>
          <li>CPSC 4900: Senior Project</li>
          <li>CPSC 5260: Building Distributed Systems</li>
          <li>PLSC 2600: Game Theory &amp; Political Science</li>
        </ul>
      )}

      <ExpandToggle
        controlsId="courses-cs"
        expanded={expandedIndices.has(2)}
        onToggle={() => handleToggle(2)}
      >
        CS classes
      </ExpandToggle>
      {expandedIndices.has(2) && (
        <ul id="courses-cs" className="list-container">
          <li>CPSC 201: Intro to Computer Science</li>
          <li>CPSC 223: Data Structures &amp; Programming Techniques</li>
          <li>CPSC 323: Systems Programming &amp; Computer Organization</li>
          <li>CPSC 365: Algorithms</li>
          <li>CPSC 381: Introduction to Machine Learning</li>
          <li>CPSC 424: Parallel Programming Techniques</li>
          <li>CPSC 474: Computational Intelligence for Games</li>
          <li>CPSC 4270: Advanced C++ Programming</li>
          <li>CPSC 4470: Intro to Quantum Computing</li>
          <li>CPSC 4800: Intro to Computer Vision</li>
          <li>CPSC 4900: Senior Project</li>
          <li>CPSC 5150: Law and Large Language Models</li>
          <li>CPSC 5210: Compilers and Interpreters</li>
          <li>CPSC 5230: Operating Systems Design &amp; Implementation</li>
          <li>CPSC 5260: Building Distributed Systems</li>
          <li>CPSC 5371: Database Design &amp; Implementation</li>
          <li>CPSC 5391: Advanced Software Engineering</li>
          <li>PHYS 345: Intro to Quantum Information</li>
        </ul>
      )}

      <ExpandToggle
        controlsId="courses-math"
        expanded={expandedIndices.has(3)}
        onToggle={() => handleToggle(3)}
      >
        Math classes
      </ExpandToggle>
      {expandedIndices.has(3) && (
        <ul id="courses-math" className="list-container">
          <li>MATH 120: Calculus: Functions of Several Variables</li>
          <li>AMTH 244: Discrete Mathematics</li>
          <li>MATH 225: Linear Algebra</li>
          <li>MATH 255: Analysis 1</li>
          <li>S&amp;DS 230: Data Exploration and Analysis</li>
          <li>S&amp;DS 241: Probability Theory</li>
          <li>S&amp;DS 242: Theory of Statistics</li>
        </ul>
      )}

      <ExpandToggle
        controlsId="courses-misc"
        expanded={expandedIndices.has(5)}
        onToggle={() => handleToggle(5)}
      >
        Misc. classes
      </ExpandToggle>
      {expandedIndices.has(5) && (
        <ul id="courses-misc" className="list-container">
          <li>ECON 121: Intermediate Microeconomics</li>
          <li>LITR 020: World Literature After Empire</li>
          <li>CHNS 142: Intermediate Modern Chinese for Heritage Speakers</li>
          <li>EALL 200: The Chinese Tradition</li>
          <li>HSAR 3290: Arts of the Silk Road</li>
          <li>ENGL 1020: Reading &amp; Writing the Modern Essay</li>
          <li>ART 1514: Basic Drawing</li>
          <li>PLSC 2600: Game Theory &amp; Political Science</li>
        </ul>
      )}

      <ExpandToggle
        controlsId="courses-transcript"
        expanded={expandedIndices.has(6)}
        onToggle={() => handleToggle(6)}
      >
        Transcript
      </ExpandToggle>
      {expandedIndices.has(6) && (
        <div id="courses-transcript" className="list-container transcript">
          {transcript.map((term) => (
            <section key={term.name} className="transcript-term">
              <div className="transcript-term-header">
                <h3>{term.name}</h3>
                <code>{term.gpa ? `term gpa: ${term.gpa}` : "in progress"}</code>
              </div>
              <ul className="transcript-courses">
                {term.courses.map((course) => (
                  <li key={`${term.name}-${course.code}`}>
                    <span>
                      {course.code}: {course.title}
                    </span>
                    <code>{course.grade}</code>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <ExpandToggle
        controlsId="courses-hs"
        expanded={expandedIndices.has(4)}
        onToggle={() => handleToggle(4)}
      >
        High School
      </ExpandToggle>
      {expandedIndices.has(4) && (
        <ul id="courses-hs" className="list-container">
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
      )}
    </div>
  );
};

export default Courses;

"use client";

import { useEffect, useState, type ReactNode } from "react";
import "./Projects.css";
import "../index.css";

const gif = "/roboticarmenv.gif";
const fitness1 = "/fit4lyfe.png";
const fitness2 = "/fit4lyfe2.png";

type Project = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  body: ReactNode;
};

const projects: Project[] = [
  {
    id: "auren",
    title: "Auren - Technical Cofounder",
    date: "July 2025 - Present",
    tags: ["Next.js", "Node.js", "Prisma", "Stripe", "Vercel"],
    body: (
      <>
        <p>
          Raised 200k pre-seed to engineer a multi-tenant SaaS platform
          empowering users to instantly launch, customize, and manage
          e-commerce storefronts on unique subdomains, with real-time
          AI-driven site/page/product generation.
        </p>
        <p>
          Integrated Stripe for secure, multi-variant payments and automated
          tax calculation, orchestrated serverless deployment with 99.9%
          uptime on Vercel and implemented Redis caching for faster
          storefront load times.
        </p>
        <a href="https://auren.co" target="_blank" rel="noopener noreferrer">
          Visit Auren
        </a>
      </>
    ),
  },
  {
    id: "yaleclubs",
    title: "Yale Clubs",
    date: "Sept 2024 - Present",
    tags: ["TypeScript", "React.js", "Node.js", "MongoDB", "JWT"],
    body: (
      <>
        <p>
          Built Yale's club management app with secure student authorization
          using TypeScript, React.js, and CAS, reducing manual administrative
          workload and ensuring data protection for 6,000+ users.
        </p>
        <p>
          Integrated AI-powered event verification and submission workflows
          using OpenAI APIs, Node.js, and MongoDB with JWT authentication to
          support scalable, secure club operations.
        </p>
        <a
          href="https://yaleclubs.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Yale Clubs
        </a>
      </>
    ),
  },
  {
    id: "parallel",
    title: "Parallelizing Large Number Multiplication",
    date: "Feb 2025 - May 2025",
    tags: ["C++", "OpenMP", "ParlayLib"],
    body: (
      <>
        <p>
          Engineered high-performance implementations of Karatsuba and 3-way
          Toom–Cook multiplication algorithms for arbitrary-precision integers,
          leveraging cache-aware data structures and optimized vectorized
          digit arithmetic.
        </p>
        <p>
          Designed novel parallelization of 3-way Toom–Cook using OpenMP and
          ParlayLib primitives, exploiting divide and conquer independence
          for fine-grained concurrency, achieved 535.25× speedup, with
          asymptotic scaling analysis.
        </p>
        <a
          href="https://github.com/francisfan0/424final"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </>
    ),
  },
  {
    id: "avenue",
    title: "Avenue",
    date: "Feb 2025 - Present",
    tags: ["Redis", "React", "Node.js", "Firecrawl"],
    body: (
      <>
        <p>
          I developed a price comparison web application and Chrome extension
          for finding related products at a lower price with optimized result
          caching using Redis for fast, repeatable user queries with affiliate
          link APIs to monetize referrals. I implemented AI-driven product
          matching using natural language embeddings and fuzzy search and
          Firecrawl for dynamic web crawling and HTML parsing to extract
          product metadata and pricing across multiple vendors.
        </p>
        <a
          href="https://app.avenuesaves.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Avenue
        </a>
      </>
    ),
  },
  {
    id: "brain",
    title: "Brain Matter Data Analysis",
    date: "June 2022 - Aug 2023",
    tags: ["SHAP", "Random Forests", "SVM", "MLR"],
    body: (
      <>
        <p>
          I utilized an interpretable model to quantify and confirm the
          cerebellum's importance in predicting risk tolerance and evaluated
          the performance of several machine learning techniques using 1000
          runs of 10-fold cross-validation. I published work using machine
          learning to assess the relationship between risk tolerance and brain
          gray matter volume as first author, and presented at the
          Organization for Human Brain Mapping (OHBM) Conference 2023.
        </p>
        <a
          href="/ML_risk_taking_supp_final.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the paper
        </a>
      </>
    ),
  },
  {
    id: "fitness",
    title: "Fit4Lyfe",
    date: "Jan 2024 - July 2024",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    body: (
      <>
        <p>
          I created a full-stack web app to track workouts, visualize
          progress, and integrated AI insights for better training. I
          deployed the app on Render, serving 100+ users and 10,000+ data
          points through clean UI and optimized backend.
        </p>
        <p>Log page:</p>
        <img
          src={fitness1}
          className="img-rounded"
          alt="Fit4Lyfe log page"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p>Chat page:</p>
        <img
          src={fitness2}
          className="img-rounded"
          alt="Fit4Lyfe chat page"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
      </>
    ),
  },
  {
    id: "robot",
    title: "Robotics Environment",
    date: "July 2024",
    tags: ["Mujoco", "Pytorch", "Gym", "OpenCV"],
    body: (
      <>
        <p>
          This was quite challenging since I was not altogether too familiar
          with the codebase or with the packages and tools we used in this
          project, so it took a while for me to get the project off the
          ground, but it was quite fun in the end since the simulator was
          extremely visual, so it was easy to see what was happening and how
          all of the code was affecting the environment. This was also quite
          rewarding because I was able to see that the robot actually learned
          the policy from the training, and although it was a simple task, it
          solidified our results.
        </p>
        <img
          src={gif}
          className="img-rounded"
          alt="Robotics environment simulation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
      </>
    ),
  },
];

const Projects: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = projects.find((project) => project.id === openId);

  useEffect(() => {
    if (!openId) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <div>
      <h1>These are some projects I have undertaken!</h1>
      <div className="py-4">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <h2>
              <button
                type="button"
                className="project-title text-hover-underline"
                onClick={() => setOpenId(project.id)}
              >
                {project.title}
              </button>
            </h2>
            <div className="project-details">
              <div className="inline-container flex-center">
                <div className="button-container">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="btn btn-outline-secondary btn-sm button-spacing project-tag"
                    >
                      <code>{tag}</code>
                    </span>
                  ))}
                </div>
                <p className="strong-spacing text-secondary">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setOpenId(null)}
          role="presentation"
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-header">
              <h2 className="project-modal-title" id="project-modal-title">
                <code>{openProject.title}</code>
              </h2>
              <button
                type="button"
                className="project-modal-close"
                aria-label="Close"
                onClick={() => setOpenId(null)}
              >
                ×
              </button>
            </div>
            <div className="project-modal-body">{openProject.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

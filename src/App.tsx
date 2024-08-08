import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Experience from "./pages/Experience";
import { useEffect } from "react";
import PokerBackground from "./components/PokerBG";
import Trial from "./components/Trial";

function App() {
  useEffect(() => {
    // Check and apply the saved theme on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/photography"
          element={
            <Layout>
              <Photography />
            </Layout>
          }
        />
        <Route
          path="/poker"
          element={
            <Layout>
              <PokerBackground />
            </Layout>
          }
        />
        <Route
          path="/trial"
          element={
            <Layout>
              <Trial />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Experience from './pages/Experience';

function App() {

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

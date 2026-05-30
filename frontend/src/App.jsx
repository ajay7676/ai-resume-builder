import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Dashboard from "./components/pages/dashboard/Dashboard";
import ResumeBuilder from "./components/pages/resbuilder/ResumeBuilder";
import Preview from "./components/pages/preview/Preview";
import Login from "./components/pages/login/Login";
import Navbar from "./components/elements/Navbar";
import Layout from "./components/elements/Layout";
import ProtectedRoute from "./route/ProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeId" element={<Preview />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

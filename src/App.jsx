import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectBoard from "./pages/ProjectBoard.jsx";
import MyProfile from "./pages/MyProfile.jsx";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectBoard/>} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from './pages/auth/Login'
import './App.css'
import ThemeToggle from './components/ThemeToggle.jsx'
import Sidebar from "./components/Sidebar.jsx";


function App() {
  

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/*' element={<Sidebar />}></Route>
      </Routes>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default App

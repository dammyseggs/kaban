import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from './pages/auth/Login'
import './App.css'
import ThemeToggle from './components/ThemeToggle.jsx'


function App() {
  

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ThemeToggle />
    </>
  );
}

export default App

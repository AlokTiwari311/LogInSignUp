import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home"; // Ensure Home component is imported
import "./App.css";

function App() {
  return (
    <div className="relative w-screen">
      <Routes>
        {/* Redirect from "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

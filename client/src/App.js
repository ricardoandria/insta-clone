import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Profil from "./Pages/Profil/Profil";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

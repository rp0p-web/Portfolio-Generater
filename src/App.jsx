import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import "./App.css"
import Dashboard from "./Dashboard";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import PortfolioPage from "./PortfolioPage";
import Templates from "./Templates";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="adminpage" element={<AdminPage/>}/>
        <Route path="/dashboard"element={<Dashboard />}/>
        <Route path="/personal/:id" element={<PersonalDetails />}/>
        <Route path="education/:id" element={<Education/>}/>
        <Route path="/projects/:id" element={<Projects />}/>
        <Route path="/skills/:id" element={<Skills />}/>
          <Route path="/certificates/:id" element={<Certificates />}/>
          <Route path="/templates/:id" element={<Templates />}/>

          <Route path="/portfolio/:id/:template"element={<PortfolioPage />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
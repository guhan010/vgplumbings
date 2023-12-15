import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import AirCon from "./pages/AirCon.tsx";
import Contact from "./pages/Contact.tsx";
import Resources from "./pages/Resources.tsx";
import Plumbing from "./pages/Plumbing.tsx";
import Electrical from "./pages/Electrical.tsx";
import Bottom from "./components/Bottom.tsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plumbing" element={<Plumbing />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/aircondition" element={<AirCon />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
    </Router>
  );
};

export default App;

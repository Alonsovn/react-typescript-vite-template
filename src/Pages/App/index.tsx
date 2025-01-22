import "antd/dist/reset.css"; // Import Ant Design CSS
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "../../Components/Navbar";
import Home from "../Home";
import Services from "../Services";
import AboutUs from "../AboutUs";
import ForBusiness from "../ForBusiness";
import NotFound from "../NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

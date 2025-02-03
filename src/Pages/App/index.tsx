import "antd/dist/reset.css"; // Import Ant Design CSS
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { AppMenu } from "../../Components/AppMenu";
import { AppRoutes } from "../../Components/AppRoutes";
import { menuItems, routes } from "./config";

const App = () => {
  return (
    <Router>
      <AppMenu items={menuItems} />
      <div style={{ padding: "20px" }}>
        <AppRoutes routes={routes} />
      </div>
    </Router>
  );
};

export default App;

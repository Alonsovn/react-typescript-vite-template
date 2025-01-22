import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to="/services">Services</Link>
      </Menu.Item>
      <Menu.Item key="about-us">
        <Link to="/about-us">About Us</Link>
      </Menu.Item>
      <Menu.Item key="for-business">
        <Link to="/for-business">For Business</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

import { Menu } from "antd";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuItemsProps } from "./type";

const AppMenu: React.FC<MenuItemsProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleMenuItemClick: MenuProps["onClick"] = (event) => {
    navigate(event.key === "home" ? "/" : `/${event.key}`);
  };

  return (
    <Menu
      className=""
      mode="horizontal"
      items={items}
      onClick={handleMenuItemClick}
    />
  );
};

export { AppMenu };

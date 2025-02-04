import { Menu, Switch } from "antd";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuItemsProps } from "./type";

const AppMenu: React.FC<MenuItemsProps> = ({
  items,
  isDarkMode,
  onThemeToggle,
}) => {
  const navigate = useNavigate();

  const handleMenuItemClick: MenuProps["onClick"] = (event) => {
    navigate(event.key === "home" ? "/" : `/${event.key}`);
  };

  return (
    <>
      <Menu
        mode="horizontal"
        items={items}
        onClick={handleMenuItemClick}
        style={{
          flex: 1,
          background: "transparent",
          borderBottom: "none",
          fontWeight: 500,
        }}
      />

      <Switch
        checkedChildren="🌙 Dark"
        unCheckedChildren="🌞 Light"
        checked={isDarkMode}
        onChange={onThemeToggle}
        className={`theme-switch ${isDarkMode ? "dark" : "light"}`}
      />
    </>
  );
};

export { AppMenu };

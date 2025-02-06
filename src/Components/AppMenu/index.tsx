import { Menu, Switch } from "antd";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import "./appmenu.css";

export type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
};

export type MenuItemsProps = {
  leftMenuItems: MenuItem[];
  rightMenuItems: MenuItem[];
  isDarkMode: boolean;
  onThemeToggle: (checked: boolean) => void;
};

const AppMenu: React.FC<MenuItemsProps> = ({
  leftMenuItems,
  rightMenuItems,
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
        items={leftMenuItems}
        onClick={handleMenuItemClick}
        style={{
          flex: 1,
          background: "transparent",
          borderBottom: "none",
          justifyContent: "flex-start",
          fontWeight: 500,
        }}
      />

      <Menu
        mode="horizontal"
        items={rightMenuItems}
        onClick={handleMenuItemClick}
        style={{
          flex: 1,
          background: "transparent",
          borderBottom: "none",
          justifyContent: "flex-end",
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

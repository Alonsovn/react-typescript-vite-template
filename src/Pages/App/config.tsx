import AboutUs from "../AboutUs";
import ForBusiness from "../ForBusiness";
import Home from "../Home";
import Services from "../Services";
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import NotFound from "../NotFound";
import { RouteItem } from "../../Components/AppRoutes/type";
import { MenuItem } from "../../Components/AppMenu/type";
import { UserAccount } from "../UserAccount";

export const routes: RouteItem[] = [
  { path: "/", element: <Home /> },
  { path: "services", element: <Services /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "for-business", element: <ForBusiness /> },
  { path: "user-account", element: <UserAccount /> },
  { path: "*", element: <NotFound /> },
];

export const menuItems: MenuItem[] = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "services",
    icon: <AlignLeftOutlined />,
    label: "Services",
  },
  {
    key: "about-us",
    icon: <AlignCenterOutlined />,
    label: "About Us",
  },
  {
    key: "for-business",
    icon: <AlignRightOutlined />,
    label: "For Business",
  },
  {
    key: "user-account",
    icon: <UserOutlined />,
    label: "User Account",
  },
];

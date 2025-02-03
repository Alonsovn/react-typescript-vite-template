export type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
};

export type MenuItemsProps = {
  items: MenuItem[];
};

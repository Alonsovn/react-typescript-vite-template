export type RouteItem = {
  path: string;
  element: React.ReactNode;
};

export type AppRoutesProps = {
  routes: RouteItem[];
};

import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

export function Default() {
  return (
    <div className="pb-40 bg-gray-50">
      <Header />
      <Outlet />
    </div>
  );
}

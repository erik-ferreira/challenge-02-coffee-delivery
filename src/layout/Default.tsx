import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

export function Default() {
  return (
    <div className="pb-40">
      <Header />
      <Outlet />
    </div>
  );
}

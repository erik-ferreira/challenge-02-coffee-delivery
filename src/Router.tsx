import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { Default } from "./layout/Default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

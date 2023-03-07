import "./styles/global.css";

import { Input } from "./components/Input";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-[560px] bg-yellow-50 flex items-center justify-between gap-3">
      <Input placeholder="Número" />
      <Input placeholder="Complemento" isOptional />
    </div>
  );
}

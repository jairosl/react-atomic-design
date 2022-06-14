import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./ui/Pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
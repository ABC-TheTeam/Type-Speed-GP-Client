import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function MainLayout() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Outlet />
    </div>
  );
}

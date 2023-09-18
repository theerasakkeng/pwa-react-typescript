import { Outlet } from "react-router-dom";

import Bottombar from "./components/navigation-bottom-bar/Bottom";
import Topbar from "./components/navigation-top-bar/Topbar";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Bottombar />
      <div className="container-main">
        <Outlet />
      </div>
      <Topbar />
    </>
  );
};

export default Layout;

import React from "react";
import NavBar from "./navbar-comp";
import SideBar from "./sidebar-comp";
import { useThemeContext } from "@/context/thme-context";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
      const { openSidebar } = useThemeContext();
  return (
    <>
      {openSidebar&& <SideBar />}
      <NavBar />
      <div className={`px-4 py-8 pt-10 ${openSidebar?'sm:ml-64':'sm:ml-0'}`}>{children}</div>
    </>
  );
}

export default LayoutWrapper;

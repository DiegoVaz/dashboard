import React, { useState } from "react";
import NavbarComponent from "../components/navbar";
import SidebarComponet from "../components/sidebar";
import MainComponet from "../components/main";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function openSidebar() {
    setSidebarOpen(true);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <NavbarComponent openSidebar={openSidebar} sidebarOpen={sidebarOpen} />
      <MainComponet />
      <SidebarComponet openSidebar={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

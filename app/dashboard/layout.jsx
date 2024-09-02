import React from "react";
import DashboardMenu from "@/components/ux/dashboard-menu";
export default function DashboardLayout({ children }) {
  return <DashboardMenu>{children}</DashboardMenu>;
}

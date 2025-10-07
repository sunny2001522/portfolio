"use client";
import { rolePages, getRoleData } from "@/lib/data";
import RolePage from "@/components/page/RolePage";

export default function UIPage() {
  const data = getRoleData("ui");
  if (!data) {
    return <div>Role not found</div>;
  }
  return <RolePage role="ui" data={data} />;
}

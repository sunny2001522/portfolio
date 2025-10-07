"use client";
import { rolePages, getRoleData } from "@/lib/data";
import RolePage from "@/components/page/RolePage";

export default function PMPage() {
  const data = getRoleData("pm");
  if (!data) {
    return <div>Role not found</div>;
  }
  return <RolePage role="pm" data={data} />;
}

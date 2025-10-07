"use client";
import { rolePages, getRoleData } from "@/lib/data";
import RolePage from "@/components/page/RolePage";

export default function FEPage() {
  const data = getRoleData("fe");
  if (!data) {
    return <div>Role not found</div>;
  }
  return <RolePage role="fe" data={data} />;
}

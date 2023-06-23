"use client";
import TabGroup from "@/components/TabGroup";
import { CHARTS_NAME } from "@/constant/namechart";
import getPathName from "@/lib/getPathnameIndex";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className="border-[1px] p-5 rounded-lg mt-5">
      <TabGroup
        path={"/" + getPathName(pathname, 0)}
        items={[
          { name: "All" },
          ...CHARTS_NAME.filter(
            (item) => item.parent === getPathName(pathname, 0)
          ),
        ]}
      />
      <div className="mt-4">{children}</div>
    </div>
  );
}

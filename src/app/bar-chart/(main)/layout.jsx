import TabGroup from "@/components/TabGroup";
import { CHARTS_NAME } from "@/constant/namechart";

export const metadata = {
  title: "Bar Charts",
};

const slug = "bar-chart";

export default function Layout({ children }) {
  return (
    <div className="border-[1px] p-5 rounded-lg mt-5">
      <TabGroup
        items={[
          { name: "All", slug: "/" + slug },
          ...CHARTS_NAME.filter((item) => item.parent === slug),
        ]}
      />
      <div className="mt-4">{children}</div>
    </div>
  );
}

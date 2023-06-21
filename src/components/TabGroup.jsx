import React from "react";
import Tab from "./Tab";

function TabGroup({ items, path }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map((item) => (
        <Tab key={item.slug} item={item} path={path} />
      ))}
    </div>
  );
}

export default TabGroup;

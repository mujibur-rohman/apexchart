import React from "react";
import Tab from "./Tab";

function TabGroup({ items, path }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map((item, i) => (
        <Tab key={i} item={item} path={path} />
      ))}
    </div>
  );
}

export default TabGroup;

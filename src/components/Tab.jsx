import Link from "next/link";
import React from "react";

function Tab({ item, path }) {
  return (
    <Link
      href={item.slug}
      className="bg-blue-500 text-white rounded px-2 py-1 transition hover:bg-blue-600 cursor-pointer"
    >
      {item.name}
    </Link>
  );
}

export default Tab;

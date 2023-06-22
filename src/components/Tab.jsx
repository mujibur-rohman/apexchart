"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

function Tab({ item, path }) {
  const href = item.slug
    ? path === "/"
      ? "" + "/" + item.slug
      : path + "/" + item.slug
    : path;

  const segment = useSelectedLayoutSegment();
  const isActive = item.slug ? segment === item.slug : segment === null;

  return (
    <Link
      href={href}
      className={`text-white rounded px-2 py-1 transition hover:bg-blue-600 cursor-pointer ${
        isActive ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      {item.name}
    </Link>
  );
}

export default Tab;

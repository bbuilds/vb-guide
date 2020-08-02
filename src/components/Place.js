import React from "react";
import { Link } from "@reach/router";
export default function Place({ img, name, desc, category, slug }) {
  return (
    <div
      className="rounded max-w-xs overflow-hidden shadow-lg m-2"
      data-activity={category}
    >
      <img className="full" src={img} />

      <div className="p-4">
        <h3 className="text-purple  mb-2">
          <strong>{name}</strong>
        </h3>
        <p className="mb-2">{desc}</p>
        <Link
          to={`/details/${slug}`}
          className="inline-block bg-orange text-white p-1 mb-4"
        >
          <strong>View Details</strong>
        </Link>
        <br />
        <div className="text-right">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-right">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

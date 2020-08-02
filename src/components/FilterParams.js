import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import categories from "../config/categories";

const FilterParams = ({ handleSetCategory }) => {
  return (
    <div className="container mx-auto">
      <div className="search-container flex items-center justify-center py-8">
        {categories.map(({ icon, slug, name }) => (
          <button
            className="flex items-center mr-4"
            data-activity={slug}
            onClick={handleSetCategory}
            key={slug}
          >
            <span className="mr-2">{name}</span>
            <FontAwesomeIcon icon={icon} size="2x" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterParams;

import React from "react";
import Place from "./Place";

const Results = ({ activities }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {activities.map(
        ({
          name,
          directionsURl,
          category,
          description,
          featuredImage,
          slug,
        }) => (
          <Place
            key={slug}
            name={name}
            img={featuredImage}
            desc={description}
            mapURL={directionsURl}
            category={category}
            slug={slug}
          />
        )
      )}
    </div>
  );
};

export default Results;

import React, { useState } from "react";
import allActivities from "../resources/activities.json";
import FilterParams from "./FilterParams";
import Results from "./Results";

const Home = () => {
  const [activities, setActivities] = useState(allActivities);

  const handleSetCategory = (e) => {
    const category = e.target.closest("button").dataset.activity;
    const activities = allActivities.filter(
      (activity) => activity.category === category
    );
    setActivities(activities);
  };

  return (
    <section>
      <FilterParams handleSetCategory={handleSetCategory} />
      <Results activities={activities} />
    </section>
  );
};

export default Home;

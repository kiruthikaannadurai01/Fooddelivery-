import React, { useContext } from "react";
import "./FoodDisplay.css";

import { StoreContext } from "../context/StoreContext";
import FoodItem from "../Fooditem/Fooditem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list
          .filter((item) =>
            category === "All" ? true : item.category === category
          )
          .map((food_item) => (
            <FoodItem
              key={food_item._id}
              id={food_item._id}
              name={food_item.name}
              description={food_item.description}
              price={food_item.price}
              image={food_item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

import React, { useContext } from "react";

import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
export const FoodDisplay = ({category}) => {
  const{food_list} = useContext(StoreContext)

  return (
    <div className = 'food-display' id = 'food-display'>
      <h2> Top dishes near you </h2>
      <div className = "food - display-list">
        {food_list.map((food_item)=>{ 
          return<Fooditem key ={index} id ={item._id} name = {item.name} price={item.price} discription={item.discription} image={item.image}/>
})}
      </div>
    </div>
  )
}   
export default FoodDisplay


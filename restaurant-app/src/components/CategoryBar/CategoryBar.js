import React from "react";
import { itemCategory } from "../../constants/itemCategory";

const CategoryBar = () => {
  return (
    <ul class="flex">
      {itemCategory.map((eachItem) => (
       
       <li class="flex-1 mr-2">
    <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">{eachItem.title}</a>
  </li>
    

      ))}
   </ul>
  );
};

export default CategoryBar;

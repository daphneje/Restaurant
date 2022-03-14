import React from "react";
// import {foodCategoryList} from '../../constants'
import { Link } from "react-router-dom";

const CategoryBar = ({foodCategory}) => {


  const {data} = foodCategory;
  console.log (foodCategory)
  console.log (data)

  return (
    <>
    <ul class="overflow-auto  flex">
      {data.map((eachItem1) => (
        <li class="mr-2">
          <Link to={`/menu/${eachItem1.itemCategoryId}`}>
             <p class="inline-block border border-blue rounded bg-blue-500 hover:border-gray-200 text-white hover:bg-blue-200 py-1 px-3 w-32">{eachItem1.title}</p> 
          </Link>
        </li>
      ))}
      </ul>

       
    </>
  );
};

export default CategoryBar;

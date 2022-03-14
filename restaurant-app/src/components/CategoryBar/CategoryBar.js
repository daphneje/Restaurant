import React from "react";
// import {foodCategoryList} from '../../constants'
import { Link } from "react-router-dom";
import "./CategoryBar.css"

const CategoryBar = ({foodCategory}) => {
  const {data} = foodCategory;
  // console.log (foodCategory)
  // console.log (data)

  return (
    <>
    <div className="app_category_bar">
      {data.map((eachItem1) => (
        <Link to={`/menu/${eachItem1.itemCategoryId}`}>
            <p className="p_category_box">{eachItem1.title}</p>
            {/* <p class="inline-block border border-blue rounded bg-blue-500 hover:border-gray-200 text-white hover:bg-blue-200 py-1 px-3 w-32">{eachItem1.title}</p> */}
        </Link>
      ))}
      </div>
       
    </>
  );
};

export default CategoryBar;

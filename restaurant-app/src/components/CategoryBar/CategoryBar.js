import React from "react";
import {foodCategoryList} from '../../constants'
import { Link } from "react-router-dom";

const CategoryBar = () => {


  return (
    <>
    <ul class="overflow-auto  flex">
      {foodCategoryList.map((eachItem1) => (
        <li class="mr-2">
          <Link to={`/menu/${eachItem1.title}`}>
            <a
              class="inline-block border border-blue rounded bg-blue-500 hover:border-gray-200 text-white hover:bg-blue-200 py-1 px-3 w-32"
              href="#"
            >
              {eachItem1.title}
            </a>
          </Link>
        </li>
      ))}
      </ul>

       
    </>
  );
};

export default CategoryBar;

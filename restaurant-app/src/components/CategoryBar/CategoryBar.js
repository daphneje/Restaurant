import React from "react";
import { itemCategory } from "../../constants/itemCategory";
import {foodCategory} from '../../constants'
import {useLocation} from "react-router-dom"

import { Link } from "react-router-dom";

const CategoryBar = () => {


  return (
    <>
    <ul class="overflow-x-scroll  flex">
      {foodCategory.map((eachItem1) => (
        <li class="flex-1 mr-2">
          <Link to={`/menu/${eachItem1.title}`}>
            <a
              class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
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

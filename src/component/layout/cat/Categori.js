import React from "react";
import { SlArrowRight } from "react-icons/sl";

import "./categori.css";
import json from "./categori.json";

export default function Categori() {
  const cat = json;
  const size = 25;
  return (
    <>
      <div className="cat">
        {[...Array(size)].map((val, i) => {
          return (
            <div className="cat-wraper" key={i}>
              <span className="cat-icon-right">
                <SlArrowRight />
              </span>
              <p className="cat-value">{cat[i].value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

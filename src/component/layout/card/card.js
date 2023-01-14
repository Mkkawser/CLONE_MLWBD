import React, { useState } from "react";
import "./card.css";

export default function Card(props) {
  const cat = props.value.cat == "movie" ? "LMov" : "TvW";
  const title = props.value.title;
  const nop = props.value.nop;
  console.log();
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">{title}</div>
        <div className="card-btn">
          <p>{nop}</p>
          <button>SEE ALL</button>
        </div>
      </div>
      <div className="card-view">
        {[...Array(25)].map((val, i) => {
          return (
            <div className="card-com" key={i}>
              <img src={`./image/${cat}${i + 1}.jpg`} alt="cat"/>
              <span className="card-title-des">
                Lorem {i} ipsum dolor sit amet
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

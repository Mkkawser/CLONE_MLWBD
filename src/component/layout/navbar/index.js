import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

export default function Index() {
  return (
    <>
      <div className="nav">
        <div className="menu-icon">
          <FiMenu />
        </div>
        <div className="logo">
          <img src="./image/mlw_logo.png" alt="logo" />
        </div>
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
      </div>
    </>
  );
}

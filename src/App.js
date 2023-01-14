import React from "react";
import ABClist from "./component/layout/abcList";
import Ads from "./component/layout/ads/ads";
import Bsub from "./component/layout/Bsub/Bsub";
import Card from "./component/layout/card/card";
import Caro from "./component/layout/carosoul/caro";
import Categori from "./component/layout/cat/Categori";
import Dmca from "./component/layout/dmca/dmca";
import LsEntry from "./component/layout/lsEntry";
import Navbar from "./component/layout/navbar";
import "./index.css";
export default function App() {
  return (
    <>
      <Navbar /> {/* navbar */}
      <ABClist /> {/*  ABC Category */}
      <div className="layout">
        <div className="layout1">
          <Caro /> {/*   Carousoul */}
          <Bsub />
          <Card
            value={{ title: "lettest Movie", nop: "1,0523", cat: "movie" }}
          />
          <Card value={{ title: "TV & WEB Series", nop: "", cat: "series" }} />
          <LsEntry />
        </div>
        <div className="layout2">
          <Ads />
          <Categori />
          <Dmca />
        </div>
      </div>
    </>
  );
}

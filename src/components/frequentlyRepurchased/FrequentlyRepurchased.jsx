import React from "react";
import style from "./frequentlyRepurchased.module.scss";
export default function FrequentlyRepurchased() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div
      className={
        style.frequentlyRepurchased + " container-fluid p-4 py-3 mx-auto"
      }
    >
      <div className={style.content+" row col-12 mx-auto p-3"}>
        <h4>Frequently repurchased in Beauty and Personal Care</h4>
        <div className={style.slider + " col-12 d-flex py-4"}>
          {arr?.map((val, id) => (
            <span className=" bg-info mx-2" key={id}>
              <img className="" src={`/images/frequentlyRepurchased/${val}.jpg`} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

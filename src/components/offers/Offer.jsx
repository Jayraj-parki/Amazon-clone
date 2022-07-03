import React from "react";
import style from "./offer.module.scss";
export default function Offer() {
    const arr=[1,2,3,4,5,6,7,8,9,10]
     return (
    <div className={style.offer + " container-fluid p-4 py-3 mx-auto"}>
      <div className={style.content + " row col-12 mx-auto p-3  align-items-center"}>
        <h4 className="col-auto  pe-1">Up to 45% off | Handpicked furniture collection from local shops</h4>
        <small className=" row col-auto  h-auto  pb-1  m-0">See all offers </small>
        <div className={style.slider + " col-12 d-flex py-4"}>
          {arr?.map((val, id) => (
            <span className=" bg-info mx-2" key={id}>
              <img className="" src={`/images/offer/${val}.jpg`} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

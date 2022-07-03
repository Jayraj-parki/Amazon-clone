import React from "react";
import style from "./relatedView.module.scss";
export default function RelatedView() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div className={style.related + " container-fluid p-4 py-3 mx-auto"}>
      <div className={style.content + " row col-12 mx-auto p-3  align-items-center"}>
        <h4 className="col-auto  pe-1">Related to items you've viewed </h4>
        <small className=" row col-auto  h-auto  pb-1  m-0">See more </small>
        <div className={style.slider + " col-12 d-flex py-4"}>
          {arr?.map((val, id) => (
            <span className=" bg-info mx-2" key={id}>
              <img className="" src={`/images/relatedView/${val}.jpg`} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import style from "./bestSeller.module.scss";
export default function BestSeller() {
  const cookWare = [
    {
      data: 1,
      value: "Gas Stoves",
    },
    {
      data: 2,
      value: "Cookware",
    },
    {
      data: 3,
      value: "Kitchen storage",
    },
    {
      data: 4,
      value: "Tableware",
    },
  ];

  const electronics = [
    {
      data: 5,
      value: "Smartwatches & fitness trackers",
    },
    {
      data: 6,
      value: "Tablets",
    },
    {
      data: 7,
      value: "Laptops",
    },
    {
      data: 8,
      value: "Monitors",
    },
  ];
  const arr = [1, 2, 3, 4];
  return (
    <div className={style.bestSeller + "  row col-12 mx-auto m-0 px-3"}>
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div
          className={
            style.inner +
            " row col-12 mx-auto p-3 d-flex justify-content-start align-items-center "
          }
        >
          <span className="row col-12 mx-auto p-0">Keep shopping for</span>

          <div className="row col-12  d-flex justify-content-between mx-auto mt-2 p-0">
            <div className="col-12 d-flex flex-wrap mb-3 p-0 pe-2">
              <img className="w-100" src="/images/bestSeller/9.jpg" alt="" />
              <small>
                Mysore Sandal Millennium 150 GM Super Premium Sandalwood Soap
              </small>
              <h4 className="col-auto ">₹790.00</h4>
              <small className="col-auto ps-2 d-flex align-items-center">
                M.R.P: <del>₹810.00</del>
              </small>
              <div className="col-12  d-flex justify-content-center align-items-center">
                {arr.map((val) => (
                  <div
                    key={val}
                    className={
                      style.smallBox +
                      "  p-1 mx-1 d-flex justify-content-center align-items-center"
                    }
                  >
                    <img
                      className="w-100"
                      src={`/images/bestSeller/s${val}.jpg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <small className={style.shop + " col-auto m-0"}>See more</small>
        </div>
      </div>
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div
          className={
            style.inner +
            " row col-12 mx-auto p-3 d-flex justify-content-start align-items-center "
          }
        >
          <span className="row col-12 mx-auto p-0">
            Best Sellers in Sports, Fitness & Outdoors
          </span>

          <div className="row col-12  d-flex justify-content-between mx-auto mt-2 p-0">
            <div className="col-12 d-flex flex-wrap mb-3 p-0 pe-2">
              <img className="w-100" src="/images/bestSeller/b.jpg" alt="" />
              <small>
                Boldfit Yoga mat for Women and Men with Carry Strap, EVA
                Material 6mm Extra Thick Exercise mat…{" "}
              </small>
              <h4 className="col-auto ">₹499.00</h4>
              <small className="col-auto ps-2 d-flex align-items-center">
                M.R.P: <del>₹899.00</del>
              </small>
              <div className="col-12  d-flex justify-content-center align-items-center">
                {arr.map((val) => (
                  <div
                    key={val}
                    className={
                      style.smallBox +
                      "  p-1 mx-1 d-flex justify-content-center align-items-center"
                    }
                  >
                    <img
                      className="w-100 h-100"
                      src={`/images/bestSeller/b${val}.jpg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <small className={style.shop + " col-auto m-0"}>See more</small>
        </div>
      </div>
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div
          className={
            style.inner +
            " row col-12 mx-auto p-3 d-flex justify-content-start align-content-between "
          }
        >
          <span className="row col-12 mx-auto p-0">Cookware & dining</span>

          <div className="row col-12  d-flex justify-content-between mx-auto  p-0">
            {cookWare?.map((val, id) => (
              <div key={id + val?.value} className="col-6 mb-3 p-0 px-2">
                <img
                  className="w-100"
                  src={`/images/bestSeller/${val?.data}.jpg`}
                  alt="jwhge"
                />
                <small>{val?.value}</small>
              </div>
            ))}
          </div>
          <small className={style.shop + " col-auto m-0 "}>See more</small>
        </div>
      </div>
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div
          className={
            style.inner +
            " row col-12 mx-auto p-3 d-flex justify-content-start align-items-center "
          }
        >
          <span className="row col-12 mx-auto p-0">
            Electronics devices for home office
          </span>

          <div className="row col-12  d-flex justify-content-between mx-auto mt-2 p-0">
            {electronics?.map((val, id) => (
              <div key={id + val?.value} className="col-6 mb-3 p-0 px-2">
                <img
                  className="w-100"
                  src={`/images/bestSeller/${val?.data}.jpg`}
                  alt=""
                />
                <small>{val?.value}</small>
              </div>
            ))}
          </div>
          <small className={style.shop + " col-auto m-0"}>See more</small>
        </div>
      </div>
      
    </div>
  );
}

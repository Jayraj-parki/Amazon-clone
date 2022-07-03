import React from "react";
import style from "./feature.module.scss";
export default function Features() {
  return (
    <div className={style.features + "  row col-12 mx-auto m-0 px-3"}>
      {/* one */}
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div className={style.inner + " row col-12 mx-auto p-3  "}>
          <span className="row col-12 mx-auto p-0">Shop by Category</span>
          <div className="row col-12  d-flex justify-content-between mx-auto my-3 p-0">
            <div className="col-6 mb-3 p-0 pe-2">
              <img className="w-100" src="/images/feature/fresh.jpg" alt="" />
              <small>Fresh</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img className="w-100" src="/images/feature/mobile.jpg" alt="" />
              <small>Mobile</small>
            </div>
            <div className="col-6 mb-3 p-0 pe-2">
              <img className="w-100" src="/images/feature/fashion.jpg" alt="" />
              <small>Fashion</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img
                className="w-100"
                src="/images/feature/electronics.jpg"
                alt=""
              />
              <small>Electronics</small>
            </div>
          </div>
          <small className={style.shop + " col-auto p-0 "}>See more</small>
        </div>
      </div>
      {/* two */}
      <div className={style.card + " row mx-auto  col-3   p-2"}>
        <div className={style.inner + " row col-12 mx-auto p-2 "}>
          <span className="row col-12 mx-auto p-0 px-2 ">
            Pay your credit card bills on Amazon
          </span>
          <div className=" row mx-auto col-12   p-0 py-3">
            <img className="w-100" src="/images/feature/payment.jpg" alt="" />
            {/* <div className="col-12 mb-3 p-0 pe-2">
          </div> */}
          </div>
          <small className={style.shop + " col-auto "}>Pay now</small>
        </div>
      </div>
      {/* third */}
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div className={style.inner + " row col-12 mx-auto p-3 "}>
          <span className="row col-12 mx-auto p-0">
            Automotive essentials | Up to 60% off
          </span>
          <div className="row col-12  d-flex justify-content-between mx-auto my-3 p-0">
            <div className="col-6 mb-3 p-0 pe-2">
              <img
                className="w-100"
                src="/images/feature/cleaning.jpg"
                alt=""
              />
              <small>Cleaning accessories</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img className="w-100" src="/images/feature/rimcare.jpg" alt="" />
              <small>Tyre & rim care</small>
            </div>
            <div className="col-6 mb-3 p-0 pe-2">
              <img className="w-100" src="/images/feature/helmet.jpg" alt="" />
              <small>Helmets</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img className="w-100" src="/images/feature/vaccume.jpg" alt="" />
              <small>Vacuum cleaner</small>
            </div>
          </div>
          <small className={style.shop + " col-auto "}>See more</small>
        </div>
      </div>
      {/* 4th */}
      <div className={style.card + " row mx-auto col-3   p-2"}>
        <div className={style.inner + " row col-12 mx-auto p-3 "}>
          <span className="row col-12 mx-auto p-0">
            Amazon Pay | Book your travel tickets
          </span>
          <div className="row col-12  d-flex justify-content-between mx-auto my-3 p-0">
            <div className="col-6 mb-3 p-0 pe-2">
              <img
                className="w-100"
                src="/images/feature/flight.jpg"
                alt=""
              />
              <small>Flights tickets</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img className="w-100" src="/images/feature/bus.jpg" alt="" />
              <small>Bus tickets</small>
            </div>
            <div className="col-6 mb-3 p-0 pe-2">
              <img className="w-100" src="/images/feature/train.jpg" alt="" />
              <small>Train tickets</small>
            </div>
            <div className="col-6 mb-3 p-0 ps-2">
              <img className="w-100" src="/images/feature/travel.jpg" alt="" />
              <small>Essential travel products</small>
            </div>
          </div>
          <small className={style.shop + " col-auto "}>
Explore more from Amazon Pay</small>
        </div>
      </div>
    </div>
  );
}

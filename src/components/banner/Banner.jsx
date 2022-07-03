import React from "react";
import style from "./banner.module.scss";
export default function Banner() {
  const arr = [1, 3, 4, 5, 6];
  return (
    <>
      <div className={style.banner + " row col-12 mx-auto p-0 mb-5"}>
        <div
          id="carouselExampleFade"
          className={style.carousel + " carousel slide carousel-fade p-0 m-0"}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/banner/banner2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            {arr.map((val, id) => (
              <div key={id} className="carousel-item">
                <img
                  src={`/images/banner/banner${val}.jpg`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            ))}
            
          </div>
          <button
            className="carousel-control-prev   d-flex justify-content-center p-5 align-items-start"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon my-5"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next  d-flex justify-content-center p-5 align-items-start"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon my-5"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* cards */}
        <div className={style.cardContainer + "  row col-12 mx-auto px-3"}>
          {/* one */}
          <div className={style.card + " row mx-auto col-3   p-2"}>
            <div className={style.inner + " row col-12 mx-auto p-3  "}>
              <span className="row col-12 mx-auto p-0">
                Upgrade your home | Amazon Brands & more
              </span>
              <div className="row col-12  d-flex justify-content-between mx-auto my-3 p-0">
                <div className="col-6 mb-3 p-0 pe-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/tv.jpg"
                    alt=""
                  />
                  <small>Smart LED TVs</small>
                </div>
                <div className="col-6 mb-3 p-0 ps-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/appliances.jpg"
                    alt=""
                  />
                  <small>Appliances</small>
                </div>
                <div className="col-6 mb-3 p-0 pe-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/furniture.jpg"
                    alt=""
                  />
                  <small>Furniture</small>
                </div>
                <div className="col-6 mb-3 p-0 ps-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/kitchen.jpg"
                    alt=""
                  />
                  <small>Kitchen products</small>
                </div>
              </div>
              <small className={style.shop + " col-auto p-0 "}>Shop Now</small>
            </div>
          </div>
          {/* two */}
          <div className={style.card + " row mx-auto  col-3   p-2"}>
            <div className={style.inner + " row col-12 mx-auto p-2 "}>
              <span className="row col-12 mx-auto p-0 px-2 ">
                Up to 70% off | Clearance store
              </span>
              <div className=" row mx-auto col-12   p-0 py-3">
                <img
                  className="w-100"
                  src="/images/bannerCard/clearance.jpg"
                  alt=""
                />
                {/* <div className="col-12 mb-3 p-0 pe-2">
                </div> */}
              </div>
              <small className={style.shop + " col-auto "}>Show More</small>
            </div>
          </div>
          {/* third */}
          <div className={style.card + " row mx-auto col-3   p-2"}>
            <div className={style.inner + " row col-12 mx-auto p-3 "}>
              <span className="row col-12 mx-auto p-0">
                Shop & Pay | Earn rewards daily
              </span>
              <div className="row col-12  d-flex justify-content-between mx-auto my-3 p-0">
                <div className="col-6 mb-3 p-0 pe-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/tools.jpg"
                    alt=""
                  />
                  <small>Professional tools</small>
                </div>
                <div className="col-6 mb-3 p-0 ps-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/instrument.jpg"
                    alt=""
                  />
                  <small>Measuring instruments</small>
                </div>
                <div className="col-6 mb-3 p-0 pe-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/cleaning.jpg"
                    alt=""
                  />
                  <small>Cleanign supplies</small>
                </div>
                <div className="col-6 mb-3 p-0 ps-2">
                  <img
                    className="w-100"
                    src="/images/bannerCard/medical.jpg"
                    alt=""
                  />
                  <small>Medical supplies</small>
                </div>
              </div>
              <small className={style.shop + " col-auto "}>Shop Now</small>
            </div>
          </div>
          {/* 4th */}
          <div className={style.card + " row mx-auto col-3   p-2"}>
            <div className={style.inner + " row col-12 mx-auto p-3 "}>
              <span className="row col-12 mx-auto p-0 mb-2">
                Sign in for your best experience
              </span>
              <button className="p-1">Sign in Securely</button>
            </div>
            <div className={style.ads + " row col-12 mx-auto p-0 mt-3"}>
              <img className="w-100" src="/images/bannerCard/ads1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

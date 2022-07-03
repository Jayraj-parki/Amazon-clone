import React from "react";
import style from "./navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Navbar() {
  const arr = [
    "best Sellters",
    "Mobile",
    "Customer Service",
    "Today's Deals",
    "Fashion",
    "Electronics",
    "Prime",
    "Home & Kitchen",
    "Amazon Pay",
    "New Release",
    "Books",
  ];
  return (
    <div
      className={
        style.navbar +
        " row col-12 mx-auto d-flex justify-content-center align-items-center py-1  px-3"
      }
    >
      <small
        //    type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        className={
          style.items +
          " col-auto px-2 py-1 d-flex justify-content-center align-items-center"
        }
      >
        <MenuIcon /> All
      </small>

      {arr?.slice(0, 6).map((val, id) => (
        <small className={style.items + " col-auto px-2 py-1"} key={id}>
          {val}
        </small>
      ))}

      <small className={style.items + " col-auto px-2 py-1"}>
        <div className="dropdown p-0 ">
          <span
            className="   dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Prime
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </small>
      {arr?.slice(7).map((val, id) => (
        <small className={style.items + " col-auto px-2 py-1"} key={id}>
          {val}
        </small>
      ))}
      <small
        className={
          style.items +
          " col-auto  p-0 ms-auto d-flex justify-content-center align-items-center"
        }
      >
        <img src="/images/navbar.jpg" height={38} alt="" />
      </small>

      {/* offcanvas */}
      <div
        className={style.offcanvas + " offcanvas offcanvas-start p-0"}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div
          className={
            style.header +
            "  offcanvas-header py-1 d-flex justify-content-start"
          }
        >
          <AccountCircleIcon className="fs-1 text-light me-3" />
          <h5 className="offcanvas-title text-light" id="offcanvasExampleLabel">
            Hello, Sign in
          </h5>
          <CloseIcon
            className={
              style.close + " ms-auto  text-light  btn-close text-reset"
            }
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className={style.body + " offcanvas-body p-0"}>
          <div className="row col-12 mx-auto p-2">
            <h5 className="ps-4 py-0 mt-3">Trending</h5>
            <span className="ps-4 py-2">Best Sellers</span>
            <span className="ps-4 py-2">New Releases</span>
            <span className="ps-4 py-2">Movers and Shakers</span>
          </div>
          <hr className="p-0 m-0 " />
          <div className="row col-12 mx-auto p-2">
            <h5 className="ps-4 py-0 mt-3">Digital Content And Devices</h5>
            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Echo & Alexa</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Fire TV</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Kindle E-Readers & eBooks</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Audible Audiobooks</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Amazon Prime Video</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Amazon Prime Music</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>
          </div>
          <hr className="p-0 m-0 " />
          <div className="row col-12 mx-auto p-2">
            <h5 className="ps-4 py-0 mt-3">Shop By Department</h5>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Mobiles, Computers</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">TV, Appliances, Electronics</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Men's Fashion</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Women's Fashion</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2 row col-12 mx-auto d-flex align-items-center">
              <span className="col-auto p-0">See More</span>
              <ArrowForwardIosIcon
                className={style.iconRot + " ms-2 p-0 col-2 fs-6 "}
              />
            </span>
          </div>
          <hr className="p-0 m-0 " />

          <div className="row col-12 mx-auto p-2">
            <h5 className="ps-4 py-0 mt-3">Programs & Features</h5>
            <span className="ps-4 py-2 row col-12 mx-auto">
              <span className="col-11 p-0">Gift Cards & Mobile Recharges</span>
              <ArrowForwardIosIcon className=" fs-6 col-auto  p-0" />
            </span>

            <span className="ps-4 py-2">Flight Tickets</span>
            <span className="ps-4 py-2">#FoundItOnAmazon</span>
            <span className="ps-4 py-2">Clearance store</span>
          </div>
          <hr className="p-0 m-0 " />
          <div className="row col-12 mx-auto p-2">
            <h5 className="ps-4 py-0 mt-3"> Help & Settings</h5>
            <span className="ps-4 py-2">Your Account</span>
            <span className="ps-4 py-2">Customer Service</span>
            <span className="ps-4 py-2">Sign In</span>
          </div>
         
        </div>
      </div>
    </div>
  );
}

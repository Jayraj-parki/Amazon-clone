import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import style from "./header.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Header() {
  return (
    <div
      className={
        style.header +
        " row col-12 py-1 mx-auto d-flex justify-content-evenly align-items-center"
      }
    >
      <div className={style.logo + " col-1  text-center "}>
        <img className="w-100" src="/images/amazon.png" alt="" />
      </div>
      <div className={style.address + " col-auto p-0 pe-1"}>
        <div className=" col-auto mx-auto">
          <small className="m-0 p-0 ps-3 row col-12">Hello</small>
          <strong className="m-0 p-0">
            <LocationOnIcon />
            Select your address
          </strong>
        </div>
      </div>
      <div
        className={
         
          " col-7 p-0  d-flex justify-content-center align-items-center"
        }
      >
        <div className={ style.searchbar +" row  col-12 mx-auto p-0  d-flex "}>
          <div className="col-12 input-group p-0">
            <span className="input-group-text p-0 ">
              <div className="dropdown p-0">
                <span
                  className=" px-2  py-2 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
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
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">
              <SearchIcon className={style.searchIcon}/>
            </span>
          </div>
        </div>
      </div>

      <div className={style.language+" col-auto d-flex  p-0 py-2 mx-1 "}>
        <div className="dropdown">
          <span
            className=" px-2  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/images/flag.webp"
              height={15}
              width={20}
              className=""
              alt=""
            />
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
      </div>
      <div className={style.auth+" col-1   p-2 "}>
        <div className="row col-12 mx-auto">
          <small className="m-0 p-0  row col-12">Hello, Sign in</small>
          <strong className="m-0 p-0">
            <div className="dropdown p-0 ">
              <span
                className="   dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account & List
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
          </strong>
        </div>
      </div>
      <div className={style.orders+" col-auto  d-flex justify-content-center align-items-center p-0 px-2 "}>
        <div className="  col-auto mx-auto">
          <small className="m-0 p-0  row col-12">Returns</small>
          <strong className="m-0 p-0">& Orders</strong>
        </div>
      </div>
      <div
        className={
          style.cartContainer +
          " col-auto  p-2 d-flex justify-content-center align-items-center"
        }
      >
        <div className={style.cart + "  mx-auto"}>
          <AddShoppingCartIcon />
          <small className="p-0 d-flex justify-content-center align-items-center">0</small>
        </div>
        <strong className="m-0 p-0">Cart</strong>
      </div>
    </div>
  );
}

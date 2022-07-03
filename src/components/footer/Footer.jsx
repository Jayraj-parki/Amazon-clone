import React from "react";
import style from "./footer.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
export default function Footer() {
  return (
    <div className={style.footer + " row col-12 mx-auto p-0"}>
      <div className={style.back + " row p-3 col-12 mx-auto"}>
        <span className="col-auto mx-auto">Back to Top</span>
      </div>
      <div
        className={
          style.list + " row col-12 mx-auto p-5 d-flex justify-content-center"
        }
      >
        <div className="col-auto mx-3 px-5">
          <span>Get to Know Us</span>
          <ul className=" mt-2 p-0">
            <li>About us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="col-auto mx-3 px-5">
          <span>Connect with Us</span>
          <ul className=" mt-2 p-0">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="col-auto mx-3 px-5">
          <span>Make Money with Us</span>
          <ul className=" mt-2 p-0">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="col-auto mx-3 px-5">
          <span>Let Us Help You</span>
          <ul className=" mt-2 p-0">
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr className="m-0" />
      <div className={style.countries + " row col-12 mx-auto m-0 py-5"}>
        <div
          className={
            style.header +
            " row col-12 mx-auto d-flex justify-content-center align-items-center"
          }
        >
          <div className="col-3 px-3 d-flex justify-content-evenly align-items-center">
            <img className="col-4 me-4" src="/images/amazon.png" alt="" />
            <button className="col-auto px-2 py-2 ms-5 d-flex align-items-center">
              <LanguageIcon
                className={
                  style.language + " fs-6 d-flex align-items-center mx-1 me-2"
                }
              />{" "}
              English{" "}
              <SwitchLeftIcon
                className={
                  style.switch + " fs-6 d-flex align-items-center mx-1 ms-3"
                }
              />
            </button>
          </div>
        </div>
        <div
          className={
            style.list +
            " row col-8 mx-auto d-flex justify-content-center align-items-center mt-2"
          }
        >
          <ul className="d-flex flex-wrap justify-content-center">
            <li className="col-auto mx-2">Australia</li>
            <li className="col-auto mx-2">Brazil</li>
            <li className="col-auto mx-2">Canada</li>
            <li className="col-auto mx-2">China</li>
            <li className="col-auto mx-2">France</li>
            <li className="col-auto mx-2">Germany</li>
            <li className="col-auto mx-2">Italy</li>
            <li className="col-auto mx-2">Japan</li>
            <li className="col-auto mx-2">Mexico</li>
            <li className="col-auto mx-2">Netherlands</li>
            <li className="col-auto mx-2">Poland</li>
            <li className="col-auto mx-2">Singapore</li>
            <li className="col-auto mx-2">Spain</li>
            <li className="col-auto mx-2">Turkey</li>
            <li className="col-auto mx-2">United Arab Emirates</li>
            <li className="col-auto mx-2">United Kingdom</li>
            <li className="col-auto mx-2">United States</li>
          </ul>
        </div>
      </div>
      <div className={style.end + " row col-12 mx-auto py-4"}>
        <div className="row col-8 mx-auto d-flex flex-wrap">
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0">AbeBooks</p>
            <span className="row mx-auto col-12 p-0 m-0">Books, art</span>
            <span className=" row mx-auto col-12 p-0 m-0">& collectibles</span>
          </div>
          <div className={style.link + " col-3 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Amazon Web Services</p>
            <span className="row mx-auto col-12 p-0 m-0">Scalable Cloud</span>
            <span className=" row mx-auto col-12 p-0 m-0">
              Computing Services
            </span>
          </div>
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Audible</p>
            <span className="row mx-auto col-12 p-0 m-0">Download</span>
            <span className=" row mx-auto col-12 p-0 m-0">Audio Books</span>
          </div>
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> DPReview</p>
            <span className="row mx-auto col-12 p-0 m-0">Digital</span>
            <span className=" row mx-auto col-12 p-0 m-0">Photography</span>
          </div>
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> IMDb</p>
            <span className="row mx-auto col-12 p-0 m-0">Movies, TV</span>
            <span className=" row mx-auto col-12 p-0 m-0">& Celebrities</span>
          </div>
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Shopbop</p>
            <span className="row mx-auto col-12 p-0 m-0">Designer</span>
            <span className=" row mx-auto col-12 p-0 m-0">Fashion Brands</span>
          </div>
          <div className={style.link + " col-3 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Amazon Business</p>
            <span className="row mx-auto col-12 p-0 m-0">Everything For</span>
            <span className=" row mx-auto col-12 p-0 m-0">Your Business</span>
          </div>
          <div className={style.link + " col-2 my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Prime Now</p>
            <span className="row mx-auto col-12 p-0 m-0">2-Hour Delivery</span>
            <span className=" row mx-auto col-12 p-0 m-0">
              on Everyday Items
            </span>
          </div>
          <div className={style.link + " col-auto my-2 mx-2 "}>
            <p className="row mx-auto col-12 p-0 m-0"> Amazon Prime Music</p>
            <span className="row mx-auto col-12 p-0 m-0">
              90 million songs, ad-free
            </span>
            <span className=" row mx-auto col-12 p-0 m-0">
              Over 15 million podcast episodes
            </span>
          </div>
        </div>
        <div
          className={
            style.additionalInfo +
            " row col-8 mx-auto d-flex justify-content-center align-items-center mt-2"
          }
        >
          <ul className="d-flex flex-wrap justify-content-center">
            <li className="col-auto mx-2">Conditions of Use & Sales</li>
            <li className="col-auto mx-2">Privacy Notice</li>
            <li className="col-auto mx-2">Interest-Based Ads</li>
            <li className="col-auto mx-2">© 1996-2022, Amazon.com, Inc. or its affiliate</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

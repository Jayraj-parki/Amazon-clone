import React from "react";
import Banner from "../../components/banner/Banner";
import BestSeller from "../../components/bestSeller/BestSeller";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import FrequentlyRepurchased from "../../components/frequentlyRepurchased/FrequentlyRepurchased";
import Header from "../../components/header/Header";
import History from "../../components/history/History";
import Navbar from "../../components/navbar/Navbar";
import Offer from "../../components/offers/Offer";
import RelatedView from "../../components/relatedView/RelatedView";
import style from "./home.module.scss";
export default function Home() {
 
  return (
    <div className={style.home + " container-fluid  m-0 p-0"}>
        <Header />
      <div className="row col-12 mx-auto p-0 m-0">
        <Navbar />
        <Banner />
      </div>
      <div className="row col-12 mx-auto p-0 mt-5">
        <Features />
        <FrequentlyRepurchased/>
        <RelatedView/>
        <BestSeller/>
        <Offer/>
        <History/>
        <hr/>
        <div className={style.bottomSignin+" col-2 mx-auto mb-3 d-flex flex-column justify-content-center align-items-center"}>
          <small>See personalized recommendations</small>
          <button className="row col-12 my-2 py-1 d-flex flex-column justify-content-center align-items-center">Sign in</button>
          <small>New customer?<span> Start here.</span></small>
        </div>
        <hr/>
        <Footer/>
      </div>
    </div>
  );
}

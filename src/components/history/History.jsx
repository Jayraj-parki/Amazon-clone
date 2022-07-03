import React from "react";
import style from "./history.module.scss";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from '@mui/icons-material/StarHalf';
export default function History() {
  const arr = [
    {
      data: 1,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
   
    {
      data: 2,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 3,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 4,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 5,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 6,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 7,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 8,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 9,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 10,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 11,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 12,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 13,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 14,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
    {
      data: 15,
      desc: "Mysore Sandal Gold Soap, 125 g (Pack of 2)",
      rates: "2,010",
      seller: "Best Seller",
      bestIn: "in Liquid",
      type: "fabric softener",
      amount: "480",
      old: "240.00",
      date: "Get it by Wednesday, June 22",
    },
  ];
  //
  return (
    <div className={style.history + " container-fluid p-4 py-3 mx-auto"}>
      <div
        className={
          style.content + " row col-12 mx-auto p-3  align-items-center"
        }
      >
        <h4 className="col-auto  pe-1">Inspired by your browsing history</h4>
        <div className={style.slider + " col-12 d-flex  py-4"}>
          {arr?.map((val, id) => (
            <>
              <span className={style.cards + "  mx-2"} key={id}>
                <img
                  className=""
                  src={`/images/history/${val.data}.jpg`}
                  alt=""
                />  
                <div className="row col-12 mx-auto">
                  <small className="m-0 p-0">{val.desc}</small>
                  <span className="m-0 p-0  ">
                    <StarIcon className="fs-6 text-warning" />
                    <StarIcon className="fs-6 text-warning" />
                    <StarIcon className="fs-6 text-warning" />
                    <StarIcon className="fs-6 text-warning" />
                    <StarHalfIcon className="fs-6 text-warning" />

                    <small className="">{val.rates}</small>
                  </span>
                  <p className="col-auto m-0 p-0">
                    &#8377;{val.amount}(&#8377;240/count)
                  </p>
                  <span className="col-auto p-0 d-flex align-items-center">
                  &#8377; <del>{val.old} </del>(10% off)
                  </span>
                  <small className="p-0 m-0">{val.type}</small>
                  <p className="m-0 p-0 ">{val.date}</p>
                </div>
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

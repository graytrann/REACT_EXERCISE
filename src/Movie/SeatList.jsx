import React from "react";
import SeatItems from "./SeatItems";
import { BsFillDisplayFill } from "react-icons/bs";

export default function SeatList({ seats }) {
  return (
    <div className="row">
      <div className="col-md-12 text-center text-white bg-black p-5">
        MÀN HÌNH <BsFillDisplayFill className="fs-3 mb-1 ms-2" />
      </div>
      <div className="row d-flex justify-content-center">
        {seats.map((seat) => {
          return (
            <div key={seat.hang} className="col-md-1 text-center m-1">
              <SeatItems seats={seat} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

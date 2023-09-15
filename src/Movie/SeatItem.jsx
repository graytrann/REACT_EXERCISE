import React from "react";
import { FaChair } from "react-icons/fa6";
// import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SeatItem({ seat, isSelected }) {
  // useState quản lý ghế có được chọn hay không
  //   const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const handleSelect = () => {
    // setIsSelected(!isSelected);
    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };
  let classes = "btn p-2 my-3";
  if (seat.daDat) {
    classes += " btn-outline-danger";
  } else if (isSelected) {
    classes += " btn-outline-success";
  } else {
    classes += " text-white";
  }
  return (
    <div>
      <button className={classes} disabled={seat.daDat} onClick={handleSelect}>
        <FaChair className="fs-1" />
        <div style={{ marginLeft: "3px" }}>{seat.soGhe}</div>
      </button>
    </div>
  );
}

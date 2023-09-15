import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";

export default function Ticket() {
  const { selectedSeats } = useSelector((state) => {
    return state.movie;
  });

  const { totalPrice } = useSelector((state) => {
    return state.movie;
  });

  const handleBooking = () => {
    alert(`TOTAL PRICE : ${totalPrice.toLocaleString()}$`);
  };
  const dispatch = useDispatch();

  const handleRemove = (seatNum) => {
    dispatch({ type: "removeSeat", payload: seatNum });
  };

  return (
    <div>
      <div className="col-md-12 text-center bg-warning p-5">
        DANH SÁCH VÉ <FaTicketAlt className="fs-3 text-white mb-1 ms-2" />
      </div>
      <div className="text-center mt-5">
        {selectedSeats.map((item) => {
          return (
            <div className="mb-2 align-self-center">
              <span className="me-3 text-white">
                GHẾ <span className="h4">{item.soGhe}</span> -{" "}
                {item.gia.toLocaleString()}$
              </span>
              <button
                className="btn text-white"
                onClick={() => {
                  handleRemove(item.soGhe);
                }}
              >
                <FaTrash />
              </button>
              <hr className="text-white" />
            </div>
          );
        })}

        {selectedSeats.length > 0 && (
          <button
            className="btn btn-success text-white"
            onClick={handleBooking}
          >
            ĐẶT VÉ <FaRegMoneyBillAlt className="ms-2 mb-1 fs-2" />
          </button>
        )}
      </div>
    </div>
  );
}

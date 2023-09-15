import React from "react";
import SeatList from "./SeatList";
import Ticket from "./Ticket";
import data from "./data.json";
import styles from "./mystyle.module.css";

export default function MovieTicket() {
  return (
    <div className="container">
      <h1 className="text-center text-white fs-1 bg-secondary p-4">
        GRAY CINEMA
      </h1>
      <div className={`row ${styles.background_movie}`}>
        <div className="col-md-8">
          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Ticket />
        </div>
      </div>
    </div>
  );
}

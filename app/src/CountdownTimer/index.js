import React, { useState, useEffect } from "react";

import "./CountdownTimer.css";

export default function CountdownTimer({ dropDate }) {
  const [timerString, setTimerString] = useState("");
  //  useEffect will run on component load
  useEffect(() => {
    console.log("Setting interval...");

    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = dropDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        console.log("Clearing interval...");
        clearInterval(interval);
      }
    }, 1000);

    //cleanup interval on component unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dropDate]);

  return (
    <div className="timer-container">
      <p className="timer-header">Candy Drop Starting In</p>
      {timerString && <div className="timer-value">{`⏰ ${timerString}`}</div>}
    </div>
  );
}

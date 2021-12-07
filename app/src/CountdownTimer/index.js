import React, {useState, useEffect} from "react";

import "./CountdownTimer.css";


export default function CountdownTimer({dropDate}) {

const [timer, setTimer] = useState('');


return (
  <div className="timer-container">
    <p className="timer-header">Candy Drop Starting In</p>
      {timer && <p className="timer-value">{`⏰ ${timer}`}</p>}
  </div>
)

}
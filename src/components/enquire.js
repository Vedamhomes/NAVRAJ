import React from 'react';
import stule from "../coreStrength.css";

const Enquire = (props) => {
    const { setIsInputModalOpen } = props
  return (
    <div className="info_box">
    <div className="info_box_text">
    Experience the Epitome of Elegance. Schedule a Private Tour.    </div>

      <button onClick={() => setIsInputModalOpen(true)} className="info_box_number info_box_number_text">Call 92668 11009</button>
  </div>
  )
}

export default Enquire

import React from 'react';
import stule from "../coreStrength.css";

const Enquire = (props) => {
    const { setIsInputModalOpen } = props
  return (
    <div className="info_box">
    <div className="info_box_text">
      Don't Miss Out. Enquire Today and Schedule Your Site Visit.
    </div>

      <button onClick={() => setIsInputModalOpen(true)} className="info_box_number info_box_number_text">Call 9871534959</button>
  </div>
  )
}

export default Enquire

import React from "react";
import './Description.css'

function Description (props) {
  return (
    <div className="Description-container">
      <p class="Description-text">
        { props.text }
      </p>
    </div>
  )
}

export default Description;
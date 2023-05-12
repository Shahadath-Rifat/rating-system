
import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onClick = (f) => f }) => (
    
  <FaStar color={selected ? "green" : "white"} onClick={onClick} />

);

export default Star;

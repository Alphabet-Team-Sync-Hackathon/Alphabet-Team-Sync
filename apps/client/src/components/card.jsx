import React from "react";
import Smallheader from "./tinyheader";
import Number from "./number";

const Card = ({ title, number }) => {
  return (
    <div className="card">
     <div className="top-flex"><Smallheader title={title} /> <img className="add-task" src={'/icons/add task.svg'} alt="" /></div>
      <Number num={number} />
    </div>
  );
};

export default Card;

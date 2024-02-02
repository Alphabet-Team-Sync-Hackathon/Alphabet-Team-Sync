import React from "react";

const Button=({title})=>
{
  return <button className="button">{title} <img src={'/icons/plus-svgrepo-com.svg'} /></button>
}

export default Button;
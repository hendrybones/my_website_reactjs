import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="box box_shadow">
        <div className="title_content d_flex">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>

        <div className="rate">
          <button className="btn_shadow">{props.rate}</button>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Card;

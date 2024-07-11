import React from "react";

const CardAuto = (props) => {
  return (
    <div className="">
      <div
        key={props.id}
        className="card"
        style={{ width: "18rem" }}
      >
        <img src={props.imagen} className="card-img-top foto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.marca+" "+props.modelo}</h5>
          <p className="card-text">
            {"$"+props.precio}
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Comprar 
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAuto;
import React from "react";

const CardAuto = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="contenedor-card">
      <div key={props.id} className="card" style={{ width: "350px" }}>
        <img src={props.imagen} className="card-img-top foto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.marca + " " + props.modelo}</h5>
          <p className="card-text">{"$" + formatPrice(props.precio)}</p>
          <div className="col-xxl-12 d-flex flex-row justify-content-center">
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger ms-1" onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAuto;

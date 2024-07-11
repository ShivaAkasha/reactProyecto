import React, { useState } from "react";
import vehiculoArray from "../scripts/vehiculos/vehiculosPreCargados";
import CardAuto from "./SubComponents/CardAuto";

export function SeccionAutos() {
  const [cars, setCars] = useState(vehiculoArray);

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.getIdvehiculo !== id));
  };
  return (
    <>
      <div className="">
        <div className="contenedor-cards m-auto">
          {cars.map((auto) => (
            <CardAuto
              key={auto.getIdvehiculo}
              id={auto.getIdvehiculo}
              imagen={auto.getImagen}
              marca={auto.getMarca}
              modelo={auto.getModelo}
              precio={auto.getPrecio}
              onDelete={handleDeleteCar}
            />
          ))}
        </div>
      </div>
    </>
  );
}

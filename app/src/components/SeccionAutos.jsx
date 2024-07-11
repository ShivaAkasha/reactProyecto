import React from "react";
import vehiculoArray from "../scripts/vehiculos/vehiculosPreCargados";
import CardAuto from "./SubComponents/CardAuto";
export function SeccionAutos() {
    return (
        < >
        <div className="contenedor-cards">
        {vehiculoArray.map((auto) =>(
                <CardAuto imagen={auto.getImagen} marca={auto.getMarca} modelo={auto.getModelo} precio={auto.getPrecio} />
            ))}
        </div>
            
        </>
    );
}
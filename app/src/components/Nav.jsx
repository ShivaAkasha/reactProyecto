import React from "react";

export function Nav() {
  return (
    <div>
      <div className="mt-3 m-auto text-center">
        <h1>Gestion Sistema De Venta de Autos</h1>
      </div>
      <ul
        className="nav nav-tabs d-flex justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active tab"
            id="ventas-tab"
            data-bs-toggle="tab"
            data-bs-target="#ventas"
            type="button"
            role="tab"
            aria-controls="ventas"
            aria-selected="true"
          >
            Gestion De  Facturas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tab"
            id="productos-tab"
            data-bs-toggle="tab"
            data-bs-target="#productos"
            type="button"
            role="tab"
            aria-controls="productos"
            aria-selected="false"
          >
            Gestion De Autos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tab"
            id="meseros-tab"
            data-bs-toggle="tab"
            data-bs-target="#meseros"
            type="button"
            role="tab"
            aria-controls="meseros"
            aria-selected="false"
          >
            Gestion De Clientes
          </button>
        </li>
      </ul>
    </div>
  );
}
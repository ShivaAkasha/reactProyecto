import React from "react";
import { Nav } from "./Nav";
import { SeccionAutos } from "./SeccionAutos";
import { FormularioFactura } from "./FormularioFactura";
import { SeccionUsuarios } from "./SeccionUsuarios"; // Importar SeccionUsuarios

export function MainContainer() {
  return (
    <div>
      <Nav />
      <div className="tab-content text-center mt-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="ventas"
          role="tabpanel"
          aria-labelledby="ventas-tab"
        >
          <FormularioFactura></FormularioFactura>
        </div>
        <div
          className="tab-pane fade"
          id="productos"
          role="tabpanel"
          aria-labelledby="productos-tab"
        >
          <SeccionAutos/>
        </div>
        <div
          className="tab-pane fade"
          id="meseros"
          role="tabpanel"
          aria-labelledby="meseros-tab"
        >
          <SeccionUsuarios/> {/* Añadir SeccionUsuarios aquí */}
        </div>
        <div
          className="tab-pane fade"
          id="categorias"
          role="tabpanel"
          aria-labelledby="categorias-tab"
        >
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import vehiculoArray from "../scripts/vehiculos/vehiculosPreCargados";
import CardAuto from "./SubComponents/CardAuto";
import Vehiculo from "../class/Vehiculo";

export function SeccionAutos() {
  const [cars, setCars] = useState(vehiculoArray);
  const [newCar, setNewCar] = useState({
    idvehiculo: '',
    year: '',
    modelo: '',
    marca: '',
    precio: '',
    patente: '',
    imagen: null,
  });

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.getIdvehiculo !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setNewCar((prevState) => ({ ...prevState, imagen: imageUrl }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddCar = () => {
    const { idvehiculo, year, modelo, marca, precio, patente, imagen } = newCar;
    const newVehiculo = new Vehiculo(
      idvehiculo,
      year,
      modelo,
      marca,
      parseInt(precio),
      patente,
      imagen
    );
    setCars((prevState) => [...prevState, newVehiculo]);
    setNewCar({
      idvehiculo: '',
      year: '',
      modelo: '',
      marca: '',
      precio: '',
      patente: '',
      imagen: null,
    });
  };

  return (
    <>
      <div>
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

        <div className="add-car-form">
          <h3>Add New Car</h3>
          <input
            type="text"
            name="idvehiculo"
            placeholder="ID"
            value={newCar.idvehiculo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={newCar.year}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="modelo"
            placeholder="Model"
            value={newCar.modelo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="marca"
            placeholder="Brand"
            value={newCar.marca}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="precio"
            placeholder="Price"
            value={newCar.precio}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="patente"
            placeholder="License Plate"
            value={newCar.patente}
            onChange={handleInputChange}
          />
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleAddCar}>Add Car</button>
        </div>
      </div>
    </>
  );
}

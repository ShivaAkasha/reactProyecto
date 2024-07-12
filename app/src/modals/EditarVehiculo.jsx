import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Vehiculo from "../class/Vehiculo"; // Importar la clase Vehiculo

export function EditarVehiculoModal({ vehiculo, onSave }) {
  const [idvehiculo, setIdvehiculo] = useState("");
  const [year, setYear] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [patente, setPatente] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (vehiculo) {
      setIdvehiculo(vehiculo.getIdvehiculo);
      setYear(vehiculo.getYear);
      setModelo(vehiculo.getModelo);
      setMarca(vehiculo.getMarca);
      setPrecio(vehiculo.getPrecio);
      setPatente(vehiculo.getPatente);
      setImagen(vehiculo.getImagen);
    }
  }, [vehiculo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idvehiculo.trim() === "" || year.trim() === "" || modelo.trim() === "" || marca.trim() === "" || precio.trim() === "" || patente.trim() === "") {
      alert("Por favor ingresa todos los campos válidos.");
      return;
    }
    const vehiculoEditado = new Vehiculo(idvehiculo, year, modelo, marca, parseInt(precio), patente, imagen);
    onSave(vehiculoEditado);
  };

  return (
    <Modal show={!!vehiculo} onHide={() => onSave(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Vehiculo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="editarIdVehiculo">
            <Form.Label>ID Vehiculo</Form.Label>
            <Form.Control
              type="text"
              value={idvehiculo}
              onChange={(e) => setIdvehiculo(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarYearVehiculo">
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarModeloVehiculo">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarMarcaVehiculo">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarPrecioVehiculo">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarPatenteVehiculo">
            <Form.Label>Patente</Form.Label>
            <Form.Control
              type="text"
              value={patente}
              onChange={(e) => setPatente(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarImagenVehiculo">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

import React, { useState } from "react";
import Factura from "../class/Factura";
import usuarioArray from "../scripts/usuarios/usuariosPreCargados";
import vehiculoArray from "../scripts/vehiculos/vehiculosPreCargados";

export function FormularioFactura() {
    const [facturas, setFacturas] = useState([]);
    const [nuevaFactura, setNuevaFactura] = useState({
        idfac: "",
        fecha: "",
        rutus: "",
        costo: "",
        vehiculo: vehiculoArray[0].getIdvehiculo,
        usuario: usuarioArray[0].getrut,
        iva: 0.19,
        total: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaFactura({ ...nuevaFactura, [name]: value });
    };

    const agregarFactura = () => {
        const vehiculo = vehiculoArray.find(v => v.getIdvehiculo === parseInt(nuevaFactura.vehiculo));
        const usuario = usuarioArray.find(u => u.getrut === nuevaFactura.usuario);
        const total = nuevaFactura.costo * (1 + nuevaFactura.iva);

        const factura = new Factura(
            nuevaFactura.idfac,
            nuevaFactura.fecha,
            nuevaFactura.rutus,
            nuevaFactura.costo,
            vehiculo,
            usuario,
            nuevaFactura.iva,
            total
        );

        setFacturas([...facturas, factura]);
    };

    const eliminarFactura = (idfac) => {
        const nuevasFacturas = facturas.filter(factura => factura.getIdfac !== idfac);
        setFacturas(nuevasFacturas);
    };

    return (
        <div>
            <form className="col-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="idfac" className="form-label">ID Factura</label>
                    <input type="text" className="form-control" id="idfac" name="idfac" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha" name="fecha" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="rutus" className="form-label">RUT Usuario</label>
                    <input type="text" className="form-control" id="rutus" name="rutus" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="costo" className="form-label">Costo</label>
                    <input type="number" className="form-control" id="costo" name="costo" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="vehiculo" className="form-label">Vehículo</label>
                    <select className="form-control" id="vehiculo" name="vehiculo" onChange={handleInputChange}>
                        {vehiculoArray.map(vehiculo => (
                            <option key={vehiculo.getIdvehiculo} value={vehiculo.getIdvehiculo}>
                                {vehiculo.getMarca} {vehiculo.getModelo}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <select className="form-control" id="usuario" name="usuario" onChange={handleInputChange}>
                        {usuarioArray.map(usuario => (
                            <option key={usuario.getrut} value={usuario.getrut}>
                                {usuario.getNombre} {usuario.getApellido}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={agregarFactura}>Agregar Factura</button>
            </form>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID Factura</th>
                        <th>Fecha</th>
                        <th>RUT Usuario</th>
                        <th>Costo</th>
                        <th>Vehículo</th>
                        <th>Usuario</th>
                        <th>IVA</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas.map(factura => (
                        <tr key={factura.getIdfac}>
                            <td>{factura.getIdfac}</td>
                            <td>{factura.getFecha}</td>
                            <td>{factura.getRutus}</td>
                            <td>{factura.getCosto}</td>
                            <td>{factura.getVehiculo.getMarca} {factura.getVehiculo.getModelo}</td>
                            <td>{factura.getUsuario.getNombre} {factura.getUsuario.getApellido}</td>
                            <td>{factura.getIva}</td>
                            <td>{factura.getTotal}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger" onClick={() => eliminarFactura(factura.getIdfac)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

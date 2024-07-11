import Factura from "../../class/Factura";
import usuarioArray from "../usuarios/usuariosPreCargados";
import vehiculoArray from "../vehiculos/vehiculosPreCargados";

let facturaArray = [
    new Factura(1, "2024-01-15", "12345678-9", 6000000, vehiculoArray[0], usuarioArray[0], 0.19, 7140000),
    new Factura(2, "2024-02-20", "98765432-1", 8000000, vehiculoArray[1], usuarioArray[1], 0.19, 9520000),
    new Factura(3, "2024-03-18", "12312312-3", 12000000, vehiculoArray[2], usuarioArray[2], 0.19, 14280000),
    new Factura(4, "2024-04-10", "45645645-6", 7000000, vehiculoArray[3], usuarioArray[3], 0.19, 8330000),
    new Factura(5, "2024-05-05", "78978978-9", 9000000, vehiculoArray[4], usuarioArray[4], 0.19, 10710000),
    new Factura(6, "2024-06-12", "32132132-1", 6500000, vehiculoArray[5], usuarioArray[5], 0.19, 7735000),
    new Factura(7, "2024-07-01", "65465465-4", 11000000, vehiculoArray[6], usuarioArray[6], 0.19, 13090000),
    new Factura(8, "2024-08-23", "98798798-7", 5000000, vehiculoArray[7], usuarioArray[7], 0.19, 5950000),
];

export default facturaArray;

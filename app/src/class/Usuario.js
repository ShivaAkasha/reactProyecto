class Usuario{
    constructor(rut, nombre, apellido, telefono, correo, vehiculo) {
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correo = correo;
        this._vehiculo = vehiculo;
    }

    //Getters
    get getrut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }
    get getApellido() {
        return this._apellido;
    }
    get getTelefono() {
        return this._telefono;
    }
    get getCorreo() {
        return this._correo;
    }
    get getVehiculo() {
        return this._vehiculo;
    }
}
    export default Usuario;
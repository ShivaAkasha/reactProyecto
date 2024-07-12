class Usuario {
    constructor(rut, nombre, apellido, telefono, correo, vehiculo) {
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correo = correo;
        this._vehiculo = vehiculo;
    }

    // Getters
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

    // Setters
    set setRut(rut) {
        this._rut = rut;
    }
    set setNombre(nombre) {
        this._nombre = nombre;
    }
    set setApellido(apellido) {
        this._apellido = apellido;
    }
    set setTelefono(telefono) {
        this._telefono = telefono;
    }
    set setCorreo(correo) {
        this._correo = correo;
    }
}
export default Usuario;

class Factura {
    constructor(idfac, fecha, rutus, costo, vehiculo, usuario, iva, total) {
        this._idfac = idfac;
        this._fecha = fecha;
        this._rutus = rutus;
        this._costo = costo;
        this._vehiculo = vehiculo;
        this._usuario = usuario;
        this._iva = iva;
        this._total = total;
    }

    // Getters
    get getIdfac() {
        return this._idfac;
    }
    get getFecha() {
        return this._fecha;
    }
    get getRutus() {
        return this._rutus;
    }
    get getCosto() {
        return this._costo;
    }
    get getVehiculo() {
        return this._vehiculo;
    }
    get getUsuario() {
        return this._usuario;
    }
    get getIva() {
        return this._iva;
    }
    get getTotal() {
        return this._total;
    }

    // Setters
    set setIdfac(idfac) {
        this._idfac = idfac;
    }
    set setFecha(fecha) {
        this._fecha = fecha;
    }
    set setRutus(rutus) {
        this._rutus = rutus;
    }
    set setCosto(costo) {
        this._costo = costo;
    }
    set setVehiculo(vehiculo) {
        this._vehiculo = vehiculo;
    }
    set setUsuario(usuario) {
        this._usuario = usuario;
    }
    set setIva(iva) {
        this._iva = iva;
    }
    set setTotal(total) {
        this._total = total;
    }
}

export default Factura;

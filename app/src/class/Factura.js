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

    //Getters
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
        return this._Usuario;
    }
    get getIva() {
        return this._Iva;
    }
    get getTotal() {
        return this._Total ;
    }
}
 export default Factura;
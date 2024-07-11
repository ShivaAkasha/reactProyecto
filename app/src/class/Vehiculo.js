class Vehiculo{
    constructor(idvehiculo,year,modelo,marca,precio,patente, imagen){
    //Atributos
        this._idvehiculo=idvehiculo;
        this._year=year;
        this._modelo=modelo;
        this._marca=marca;
        this._precio=precio;
        this._patente=patente;
        this._imagen=imagen;
    }
    //Getters
    get getIdvehiculo() {
        return this._idvehiculo;
    }
    get getYear() {
        return this._year;
    }
    get getModelo() {
        return this._modelo;
    }
    get getMarca() {
        return this._marca;
    }
    get getPrecio() {
        return this._precio;
    }
    get getPatente() {
        return this._patente;
    }
    get getImagen() {
        return this._imagen;
    }
}



export default Vehiculo;
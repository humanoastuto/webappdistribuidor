import {Item} from './item';

export class Pedido {
  private _atendido?: boolean = false;
  constructor(private _nombre?: string, private _telefono?: string, private _fecha?: string,
              private _lat?: string, private _lng?: string, private _items?: Item[]) {
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get atendido() {
    return this._atendido;
  }
  set atendido(atendido: boolean) {
    this._atendido = atendido;
  }
  get telefono() {
    return this._telefono;
  }
  set telefono(telefono: string) {
    this._telefono = telefono;
  }
  get fecha() {
    return this._fecha;
  }
  set fecha(fecha: string) {
    this._fecha = fecha;
  }
  get lat() {
    return this._lat;
  }
  set lat(lat: string) {
    this._lat = lat;
  }
  get lng() {
    return this._lng;
  }
  set lng(lng: string) {
    this._lng = lng;
  }
  get items() {
    return this._items;
  }
  set items(items: Item[]) {
    this._items = items;
  }
}

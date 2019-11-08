import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediadorService {

    latitud: number;
    longitud: number;
    id: string;
    usuario: string;

    constructor() { }

    setLatitud(latitud: number) {
        this.latitud = latitud;
    }

    getLatitud() {
        return this.latitud;
    }

    setLongitud(longitud: number) {
        this.longitud = longitud;
    }

    getLongitud() {
        return this.longitud;
    }

    setId(id: string) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setUsuario(usuario: string) {
        this.usuario = usuario;
    }

    getUsuario() {
        return this.usuario;
    }
}

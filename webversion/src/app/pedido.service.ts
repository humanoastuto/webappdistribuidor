import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Item} from './item';
import {Pedido} from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private ejemplo: Item[];
  private pedido = new BehaviorSubject<Pedido>(new Pedido());
  currentPedido = this.pedido.asObservable();

  constructor() { }
  /*
  changeCoords(latitud: number, longitud: number) {
    this.pedido.longitud.next(latitud);
    this.pedido.longitud.next(longitud);
  }*/
  changePedido(pedido: Pedido) {
    this.pedido.next(pedido);
  }
  /*private ejemplo: Item[] = {};
  private pedido: Pedido = new BehaviorSubject<Pedido>({
    nombre: '',
    atendido: false,
    fecha: '',
    latitud: '',
    longitud: '',
    items: this.ejemplo,
  });
  currentMessage = this.pedido.asObservable();

  constructor() { }

  changeMessage(pedido: Pedido) {
    this.pedido.next(pedido);
  }*/
}

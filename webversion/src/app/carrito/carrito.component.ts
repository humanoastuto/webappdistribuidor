import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../pedido.service';
import { Pedido } from '../pedido';
import { Item } from '../item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pedido: Pedido;
  localItems: Item[] = [];
  total: number = 0;
  constructor(private data: PedidoService) {
  }

  ngOnInit() {
    this.data.currentPedido.subscribe(pedido => this.pedido = pedido);
    this.localItems = this.pedido.items;
    this.totalPrecio();
  }

  aumentarCant(item: Item) {
    if (item.cantidad < 10) {
      item.cantidad++;
    }
    this.totalPrecio();
  }

  disminuirCant(item: Item) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
    this.totalPrecio();
  }

  eliminar(index: number) {
    this.localItems.splice(index, 1);
    this.data.changePedido(new Pedido(this.pedido.nombre, this.pedido.telefono, this.pedido.fecha,
      this.pedido.lat, this.pedido.lng, this.localItems));
    this.totalPrecio();
    console.log(this.pedido);
  }

  totalPrecio(){
    this.total = 0;
    for (let item of this.localItems) {
      this.total += item.precio * item.cantidad;
    }
    this.data.changePedido(new Pedido(this.pedido.nombre, this.pedido.telefono, this.pedido.fecha,
                            this.pedido.lat, this.pedido.lng, this.localItems));
    //console.log(this.pedido);
  }
}

import { Component, OnInit, IterableDiffers } from '@angular/core';
import { CrudService } from '../crud.service';
import {PedidoService} from '../pedido.service';
import { Pedido } from '../pedido';
import { Item } from '../item';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(private crudService: CrudService, private data: PedidoService) { }

  productos: any;
  pedido: Pedido;
  ejemplo: Item[] = [];
  ngOnInit() {
    this.data.currentPedido.subscribe(pedido => this.pedido = pedido);
    this.crudService.read_Productos().subscribe(data => {

      this.productos = data.map(e => {
        return {
          id: e.payload.doc.id,
          Producto: e.payload.doc.data()['Producto'],
          Precio: e.payload.doc.data()['Precio']
        };
      })
      console.log(this.productos[2]);

    });
  }

  addCarrito(producto) {
    let item: Item = {
      nombre: producto.Producto,
      cantidad: 1,
      precio: producto.Precio
    }
    this.ejemplo.push(item);
    this.data.changePedido(new Pedido(this.pedido.nombre, this.pedido.telefono, this.pedido.fecha,
                          this.pedido.lat, this.pedido.lng, this.ejemplo));
    console.log(this.pedido.items);
  }

}

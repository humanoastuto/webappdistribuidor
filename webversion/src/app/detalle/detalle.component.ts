import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {PedidoService} from '../pedido.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pedido: Pedido;
  fecha: string;
  total: number = 0;
  nombre: string;
  celular: string;
  constructor(private crudService: CrudService, private data: PedidoService) {
  }

  ngOnInit() {
    this.data.currentPedido.subscribe(pedido => this.pedido = pedido);
    this.obtenerFecha();
    this.totalPrecio();
  }

  obtenerFecha(){
    var f = new Date();
    this.fecha = f.getDate() +'/'+ f.getMonth() +'/'+ f.getFullYear();
  }

  totalPrecio(){
    this.total = 0;
    if (Array.isArray(this.pedido.items) && this.pedido.items.length) {
      for (let item of this.pedido.items) {
        this.total += item.precio * item.cantidad;
      }
    }
  }
  addPedido(){
    this.data.changePedido(new Pedido(this.nombre, this.celular, this.fecha, this.pedido.lat, this.pedido.lng, this.pedido.items));
    console.log(this.pedido);
    let record = {};
    record['Nombre'] = this.nombre;
    record['Celular'] = this.celular;
    record['Fecha'] = this.fecha;
    record['Latitud']=this.pedido.lat;
    record['Longitud']=this.pedido.lng;
    record['Atendido']=this.pedido.atendido;
    this.crudService.create_NewPedido(record).then(resp => {
      this.nombre = '';
      this.celular = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
}

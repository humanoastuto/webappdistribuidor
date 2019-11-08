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
    record['Latitud'] = this.pedido.lat;
    record['Longitud'] = this.pedido.lng;
    record['Atendido'] = this.pedido.atendido;
    this.crudService.create_NewPedido(record).then(resp => {
      this.nombre = '';
      this.celular = '';
      console.log(resp);
      for (let item of this.pedido.items) {
      this.crudService.firestore.collection('Items').add({
        id: resp.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad
      });
      }
      this.data.changePedido(new Pedido('', '', '', '', '', []));
      this.total = 0;
      /*resp.collection('Pedidos').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          if(doc.data['Nombre'] == this.nombre){
            for (let item of this.pedido.items) {
              this.crudService.firestore.collection('Pedidos').add(record);
            }
          }
        })
      })
      /*this.crudService.read_Pedidos().subscribe(data => {
        data.map(e => {
          if(e.payload.doc.data()['Nombre'] == this.nombre){
           // if (Array.isArray(this.pedido.items) && this.pedido.items.length) {
              for (let item of this.pedido.items) {
                //this.total += item.precio * item.cantidad;
                this.crudService.firestore.collection(e.payload.doc.id).add({
                  name: this.nombre
                });
              }
            //}
          }
        });

        /*this.productos = data.map(e => {
          return {
            id: e.payload.doc.id,
            Producto: e.payload.doc.data()['Producto'],
            Precio: e.payload.doc.data()['Precio']
          };
        })
        console.log(this.productos[2]);

      });*/
    })
      .catch(error => {
        console.log(error);
      });
    }
}

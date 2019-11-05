import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {PedidoService} from '../pedido.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-ubicacion-cliente',
  templateUrl: './ubicacion-cliente.component.html',
  styleUrls: ['./ubicacion-cliente.component.css']
})
export class UbicacionClienteComponent implements OnInit {
  lat = -17.393848;
  lng = -66.156842;
  pedido: Pedido;
  constructor(private data: PedidoService) { }

  ngOnInit() {
    this.data.currentPedido.subscribe(pedido => this.pedido = pedido);
  }

  zoom: number = 14;
  marker: Marker;
  clickedMarker(label: string) {
    console.log('clicked the marker: ${label}')
  }
  mapClicked($event: MouseEvent) {
    this.marker = {
		  label: 'Yo',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    };
    //this.pedido.lat = '' + this.marker.lat;
    //this.pedido.lng = '' + this.marker.lng;
    this.data.changePedido(new Pedido(this.pedido.nombre, this.pedido.telefono, this.pedido.fecha,
                          '' + this.marker.lat, '' + this.marker.lng));
    console.log(this.pedido.lat + ', ' + this.pedido.lng);
  }
}
interface Marker {
	lat: number;
	lng: number;
  label?: string;
	draggable: boolean;
  iconUrl: string;
}

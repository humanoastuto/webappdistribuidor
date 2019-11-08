import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title = 'Mapa de Control';
  constructor(private crudService: CrudService) { }

  lat = 51.678418;
  lng = 7.809007;
  proveedores: any;
  vendedores: any;
  ventas :any;
  pedidos:any;
  zoom: number = 6;

  ngOnInit() { 
    this.crudService.read_Vendedor().subscribe(data => {
      this.vendedores = data.map(e => {    
        this.crearmarkersv( e.payload.doc.data()['Email'],e.payload.doc.data()['Latitud'],e.payload.doc.data()['Longitud']); 
      })
    });   
    this.crudService.read_Proveedores().subscribe(data => {
      this.proveedores = data.map(e => {
        this.crearmarkers( e.payload.doc.data()['Proveedor'],e.payload.doc.data()['Latitud'],e.payload.doc.data()['Longitud']);
      })
    });
    this.crudService.read_Pedidos().subscribe(data => {
      this.pedidos = data.map(e => {
        this.crearmarkerspe( e.payload.doc.data()['Nombre'],e.payload.doc.data()['Latitud'],e.payload.doc.data()['Longitud']);
      })
    });
    this.crudService.read_Ventas().subscribe(data => {
      this.ventas = data.map(e => {
        this.crearmarkersve( e.payload.doc.data()['Usuario'],e.payload.doc.data()['Latitud'],e.payload.doc.data()['Longitud']);
      })
    });
   }
   markers: marker[] = [ //se necesita inicializar el arreglo de markers de esta manera, asi que uno para el administrador, por que no
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'Administrador',
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    }
  ]
   crearmarkers(a: string,b: string,c: string){ //markers de proveedores
    this.markers.push({
      label: a,
      lat: parseFloat(b),
      lng: parseFloat(c),
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });
}
crearmarkersv(a: string,b: string,c: string){ //markers de vendedores
  this.markers.push({
    label: a,
    lat: parseFloat(b),
    lng: parseFloat(c),
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  });
}
crearmarkerspe(a: string,b: string,c: string){ //markers de pedidos
  this.markers.push({
    label: a,
    lat: parseFloat(b),
    lng: parseFloat(c),
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
  });
}
crearmarkersve(a: string,b: string,c: string){ //markers de ventas
  this.markers.push({
    label: a,
    lat: parseFloat(b),
    lng: parseFloat(c),
    iconUrl: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
  });
}
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
     
}
interface marker {
	lat: number;
	lng: number;
  label?: string;
  iconUrl: string;
}




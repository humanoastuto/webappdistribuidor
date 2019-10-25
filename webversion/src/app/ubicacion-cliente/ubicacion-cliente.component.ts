import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion-cliente',
  templateUrl: './ubicacion-cliente.component.html',
  styleUrls: ['./ubicacion-cliente.component.css']
})
export class UbicacionClienteComponent implements OnInit {

  title = 'App';
  lat = -17.393848;
  lng = -66.156842;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }
  lat = 51.678418;
  lng = 7.809007;

  contador:number=4;
  zoom: number = 6;
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	  }
  ]
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
		  label: this.contador.toString(),
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    });
    this.contador++;
  } 
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    this.markers.push({
      label: m.label,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
    });
  }
}
interface marker {
	lat: number;
	lng: number;
  label?: string;
	draggable: boolean;
  iconUrl: string;
  
}




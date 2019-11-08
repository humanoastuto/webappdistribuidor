import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediadorService } from '../mediador.service';
declare var google;

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.page.html',
    styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit {

    latitude: number;
    longitude: number;

    map;

    id: string;
    lat: number;
    lon: number;
    usu: string;

    @ViewChild('mapElement', { static: true }) mapElement;

    constructor(private router: Router,
                private firestore: AngularFirestore,
                private mediador: MediadorService) { }


    ngOnInit() {
        
        this.asignarValores();
    }

    ngAfterContentInit(): void {
        this.map = new google.maps.Map(
            this.mapElement.nativeElement,
            {
                center: { lat: - 17.398917, lng: - 66.218512 },
                zoom: 16

            });
            const pos = {
                lat: - 17.398917,
                lng: - 66.218512
            }
            const posUs = {
                lat: this.lat,
                lng: this.lon
            }
            const icon = {
                url: 'assets/icon/u.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            const iconUs = {
                url: 'assets/icon/a.png',
                scaledSize: new google.maps.Size(50, 50),
            };
        
            const marker = new google.maps.Marker({
                position: pos,
                map: this.map,
                title: 'Vendedor',
                icon: icon
            });
            const markerUs = new google.maps.Marker({
                position: posUs,
                map: this.map,
                title: 'Usuario',
                icon: iconUs
            });
            const contentString = '<div id="content">' +
                'Esta es tu Ubicacion';
            const contentStringUs = '<div id="content">' +
                'Esta es la ubicacion del Usuario';
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });
            const infowindowUs = new google.maps.InfoWindow({
                content: contentStringUs,
                maxWidth: 400
            });
            marker.addListener('click', function () {
                infowindow.open(this.map, marker);
                infowindowUs.open(this.map, markerUs);
            });
        
    }
    tuUbicacion() {
        this.router.navigate(['/cliente'])
    }

    asignarValores() {
        this.lat = this.mediador.getLatitud();
        this.lon = this.mediador.getLongitud();
        this.id = this.mediador.getId();
        this.usu = this.mediador.getUsuario();
    }
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  title = 'Plantilla de proveedores';

  proveedores: any;
  prov: string;
  cod: string;
  desc: string;
  lat: string;
  lng: string;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Proveedores().subscribe(data => {

      this.proveedores = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Proveedor: e.payload.doc.data()['Proveedor'],
          Codigo: e.payload.doc.data()['Codigo'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Longitud: e.payload.doc.data()['Longitud'],
          Latitud: e.payload.doc.data()['Latitud']
        };
      })
      console.log(this.proveedores);

    });
  }

 
  RemoveRecord(rowID) {
    this.crudService.delete_Proveedor(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditProv = record.Proveedor;
    record.EditCod = record.Codigo;
    record.EditDesc = record.Descripcion;
    record.EditLng = record.Longitud;
    record.EditLat = record.Latitud;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Proveedor'] = recordRow.EditProv;
    record['Codigo'] = recordRow.EditCod;
    record['Descripcion'] = recordRow.EditDesc;
    record['Longitud'] = recordRow.EditLng;
    record['Latitud'] = recordRow.EditLat;
    this.crudService.update_Producto(recordRow.id, record);
    recordRow.isEdit = false;
  }
}



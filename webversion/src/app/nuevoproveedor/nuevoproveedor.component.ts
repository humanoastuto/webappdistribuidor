import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-nuevoproveedor',
  templateUrl: './nuevoproveedor.component.html',
  styleUrls: ['./nuevoproveedor.component.css']
})
export class NuevoproveedorComponent implements OnInit {

  title = 'Registro de Proveedores';

  proveedores: any;
  prov: string;
  cod: string;
  desc: string;
  latit: string;
  long: string;

  lat = 51.678418;
  lng = 7.809007;

  contador:number=4;
  zoom: number = 6;

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
          latit: e.payload.doc.data()['Latitud'],
          long: e.payload.doc.data()['Longitud']
        };
      })
      console.log(this.proveedores);

    });
  }

  CreateRecord() {
    let record = {};
    record['Proveedor'] = this.prov;
    record['Codigo'] = this.cod;
    record['Descripcion'] = this.desc;
    record['Latitud'] = this.latit;
    record['Longitud'] = this.long;

    this.crudService.create_NewProveedor(record).then(resp => {
      this.prov = "";
      this.cod = "";
      this.desc = "";
      this.latit = "";
      this.long = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
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
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Proveedor'] = recordRow.EditProv;
    record['Codigo'] = recordRow.EditCod;
    record['Desc'] = recordRow.EditDesc;
    this.crudService.update_Producto(recordRow.id, record);
    recordRow.isEdit = false;
  }
}

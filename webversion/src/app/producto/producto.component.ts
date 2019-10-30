import { Component, OnInit } from '@angular/core';


import { CrudService } from '../crud.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent  implements OnInit {
  title = 'Plantilla de productos';

  productos: any;
  prov: string;
  prod: string;
  desc: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Productos().subscribe(data => {

      this.productos = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Proveedor: e.payload.doc.data()['Proveedor'],
          Producto: e.payload.doc.data()['Producto'],
          Descripcion: e.payload.doc.data()['Descripcion']
        };
      })
      console.log(this.productos);
    });
  }

  CreateRecord() {
    let record = {};
    record['Proveedor'] = this.prov;
    record['Producto'] = this.prod;
    record['Descripcion'] = this.desc;
    this.crudService.create_NewProducto(record).then(resp => {
      this.prov = "";
      this.prod = "";
      this.desc = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Producto(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditProv = record.Proveedor;
    record.EditProd = record.Producto;
    record.EditDesc = record.Descripcion;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Proveedor'] = recordRow.EditProv;
    record['Producto'] = recordRow.EditProd;
    record['Desc'] = recordRow.EditDesc;
    this.crudService.update_Producto(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
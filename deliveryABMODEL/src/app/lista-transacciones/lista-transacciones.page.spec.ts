import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransaccionesPage } from './lista-transacciones.page';

describe('ListaTransaccionesPage', () => {
  let component: ListaTransaccionesPage;
  let fixture: ComponentFixture<ListaTransaccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTransaccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTransaccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

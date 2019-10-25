import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionVendedorComponent } from './ubicacion-vendedor.component';

describe('UbicacionVendedorComponent', () => {
  let component: UbicacionVendedorComponent;
  let fixture: ComponentFixture<UbicacionVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

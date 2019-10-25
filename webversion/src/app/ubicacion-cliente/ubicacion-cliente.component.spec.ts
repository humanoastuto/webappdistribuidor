import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionClienteComponent } from './ubicacion-cliente.component';

describe('UbicacionClienteComponent', () => {
  let component: UbicacionClienteComponent;
  let fixture: ComponentFixture<UbicacionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

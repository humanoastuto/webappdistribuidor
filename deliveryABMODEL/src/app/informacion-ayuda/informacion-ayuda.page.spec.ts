import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAyudaPage } from './informacion-ayuda.page';

describe('InformacionAyudaPage', () => {
  let component: InformacionAyudaPage;
  let fixture: ComponentFixture<InformacionAyudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionAyudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAyudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

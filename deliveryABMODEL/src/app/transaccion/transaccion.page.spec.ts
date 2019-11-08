import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionPage } from './transaccion.page';

describe('TransaccionPage', () => {
  let component: TransaccionPage;
  let fixture: ComponentFixture<TransaccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

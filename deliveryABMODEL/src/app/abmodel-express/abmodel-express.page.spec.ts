import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmodelExpressPage } from './abmodel-express.page';

describe('AbmodelExpressPage', () => {
  let component: AbmodelExpressPage;
  let fixture: ComponentFixture<AbmodelExpressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmodelExpressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmodelExpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

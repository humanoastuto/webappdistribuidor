import { TestBed } from '@angular/core/testing';

import { MediadorService } from './mediador.service';

describe('MediadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediadorService = TestBed.get(MediadorService);
    expect(service).toBeTruthy();
  });
});

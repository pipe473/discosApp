import { TestBed } from '@angular/core/testing';

import { FormularioDiscoService } from './formulario-disco.service';

describe('FormularioDiscoService', () => {
  let service: FormularioDiscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioDiscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

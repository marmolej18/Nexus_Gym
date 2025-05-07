import { TestBed } from '@angular/core/testing';

import { EntrenadorasService } from './entrenadoras.service';

describe('EntrenadorasService', () => {
  let service: EntrenadorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrenadorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

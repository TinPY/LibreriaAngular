import { TestBed } from '@angular/core/testing';

import { LibreriaLoginService } from './libreria-login.service';

describe('LibreriaLoginService', () => {
  let service: LibreriaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

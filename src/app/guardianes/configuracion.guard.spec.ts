import { TestBed } from '@angular/core/testing';

import { ConfiguracionGuard } from './configuracion.guard';

describe('ConfiguracionGuard', () => {
  let guard: ConfiguracionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfiguracionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

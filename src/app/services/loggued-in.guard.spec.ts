import { TestBed, async, inject } from '@angular/core/testing';

import { LogguedInGuard } from './loggued-in.guard';

describe('LogguedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogguedInGuard]
    });
  });

  it('should ...', inject([LogguedInGuard], (guard: LogguedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});

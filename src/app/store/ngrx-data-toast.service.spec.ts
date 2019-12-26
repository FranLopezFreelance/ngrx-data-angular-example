import { TestBed } from '@angular/core/testing';

import { NgrxDataToastService } from './ngrx-data-toast.service';

describe('NgrxDataToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxDataToastService = TestBed.get(NgrxDataToastService);
    expect(service).toBeTruthy();
  });
});

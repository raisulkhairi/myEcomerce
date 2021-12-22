import { TestBed } from '@angular/core/testing';

import { ElektronikService } from './elektronik.service';

describe('ElektronikService', () => {
  let service: ElektronikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElektronikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

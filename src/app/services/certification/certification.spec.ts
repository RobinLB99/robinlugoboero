import { TestBed } from '@angular/core/testing';

import { CertificationService } from './certification.service';

describe('CertificationsService', () => {
  let service: CertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

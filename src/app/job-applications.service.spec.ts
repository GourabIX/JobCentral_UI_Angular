import { TestBed } from '@angular/core/testing';

import { JobApplicationsService } from './job-applications.service';

describe('JobApplicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobApplicationsService = TestBed.get(JobApplicationsService);
    expect(service).toBeTruthy();
  });
});

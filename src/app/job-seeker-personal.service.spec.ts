import { TestBed } from '@angular/core/testing';

import { JobSeekerPersonalService } from './job-seeker-personal.service';

describe('JobSeekerPersonalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobSeekerPersonalService = TestBed.get(JobSeekerPersonalService);
    expect(service).toBeTruthy();
  });
});

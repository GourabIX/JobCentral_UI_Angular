import { TestBed } from '@angular/core/testing';

import { JobSeekerAcademicService } from './job-seeker-academic.service';

describe('JobSeekerAcademicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobSeekerAcademicService = TestBed.get(JobSeekerAcademicService);
    expect(service).toBeTruthy();
  });
});

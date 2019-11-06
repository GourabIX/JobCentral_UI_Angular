import { TestBed } from '@angular/core/testing';

import { JobSeekerProfessionalService } from './job-seeker-professional.service';

describe('JobSeekerProfessionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobSeekerProfessionalService = TestBed.get(JobSeekerProfessionalService);
    expect(service).toBeTruthy();
  });
});

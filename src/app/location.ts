import { Company } from './company';
import { Employer } from './employer';
import { Admin } from './admin';
import { Job } from './job';
import { JobSeeker } from './job-seeker';

export class Location {
    locationId: number;
    city: string;
    state: string;
    employer: Employer[];
    companies: Company[];
    admin: Admin;
    jobSeeker: JobSeeker[];
    jobs: Job[];
}

import { Company } from './company';
import { Employer } from './employer';
import { JobSeeker } from './job-seeker';
import { Location } from './location';
import { JobApplications } from './job-applications';

export class Job {
    jobId: number;
    jobName: string;
    company: Company;
    jobType: string;
    numberOfVacancies: number;
    jobDescription: string
    skillsRequired: string
    employer: Employer;
    category: string;
    jobSeeker: JobSeeker;
    location: Location;
    jobApplications: JobApplications[];
}

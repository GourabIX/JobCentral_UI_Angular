import { JobSeeker } from './job-seeker';

export class JobSeekerProfessional {
    jobSeekerProfessionalId: number;
    jobSeeker: JobSeeker;
    lastRole: string;
    fromDateLastRole: Date;
    toDateLastRole: Date;
    skillset: string;
    resume: File;
}

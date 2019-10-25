import { Login } from './login';
import { Job } from './job';
import { JobSeeker } from './job-seeker';

export class JobApplications {
    applicationId: number;
    login: Login;
    jobs: Job;
    dateTimeOfApplication = new Date();
    jobSeeker: JobSeeker;
}

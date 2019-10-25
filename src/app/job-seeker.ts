import { Login } from './login';
import { Location } from './location';
import { Job } from './job';
import { JobApplications } from './job-applications';
import { JobSeekerAcademic } from './job-seeker-academic';
import { JobSeekerPersonal } from './job-seeker-personal';
import { JobSeekerProfessional } from './job-seeker-professional';

export class JobSeeker {
    jobSeekerId: number;
    login: Login;
    jobSeekerAcademic: JobSeekerAcademic;
    jobSeekerPersonal: JobSeekerPersonal;
    jobSeekerProfessional: JobSeekerProfessional;
    location: Location;
    jobApplications: JobApplications[];
    jobs: Job[];
}

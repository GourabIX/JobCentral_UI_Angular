import { JobSeeker } from './job-seeker';
import { Employer } from './employer';
import { Admin } from './admin';

export class Login {
    userId: number;
    username: string;
    password: string;
    roleType: string;
    jobSeeker: JobSeeker;
    employer: Employer;
    admin: Admin;
}

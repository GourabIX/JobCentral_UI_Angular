import { Login } from './login';
import { Company } from './company';
import { Job } from './job';
import { Location } from './location';

export class Employer {
    employerId: number;
    login: Login;
    name: string;
    contact: number;
    designation: string;
    company: Company;
    jobs: Job[];
    location: Location;
}

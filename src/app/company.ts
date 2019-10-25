import { Location } from './location';
import { Employer } from './employer';
import { Job } from './job';

export class Company {
    companyId: number;
    companyName: string;
    locations: Location[];
    jobs: Job[];
    employers: Employer[];
}

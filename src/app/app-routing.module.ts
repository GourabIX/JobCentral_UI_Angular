import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { EmployerFormComponent } from './employer-form/employer-form.component';
import { JobApplicationConfirmationComponent } from './job-application-confirmation/job-application-confirmation.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { VerifyEmployerComponent } from './verify-employer/verify-employer.component';
import { JobseekerFormComponent } from './jobseeker-form/jobseeker-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { JobPostComponent } from './job-post/job-post.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { SuccessEmpComponent } from './success-emp/success-emp.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutus',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-js',
    component: JobseekerLoginComponent
  },
  {
    path: 'emp-form',
    component: EmployerFormComponent
  },
  {
    path: 'jobappconf',
    component: JobApplicationConfirmationComponent
  },
  {
    path: 'jobdescription',
    component: JobDescComponent
  },
  {
    path: 'confirmation',
    component: JobApplicationConfirmationComponent
  },
  {
    path: 'settings',
    component: UserSettingsComponent
  },
  {
    path: 'verifyEmployer',
    component: VerifyEmployerComponent
  },
  {
    path: 'signupjs',
    component:JobseekerFormComponent
  },
  {
    path: 'jobpost',
    component:JobPostComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'loggedInEmployer',
    component:SuccessEmpComponent
  },
  {
    path: 'searchJobs',
    component:JobsearchComponent
  },
  {
    path: 'error',
    component:ErrorPageComponent
  },
  {
    path: 'employerProfile',
    component:EmployerProfileComponent
  },
  {
    path: '',
    redirectTo: '/error',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployerFormComponent } from './employer-form/employer-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { JobApplicationConfirmationComponent } from './job-application-confirmation/job-application-confirmation.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { VerifyEmployerComponent } from './verify-employer/verify-employer.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { JobseekerFormComponent } from './jobseeker-form/jobseeker-form.component';
import { JobPostComponent } from './job-post/job-post.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { SuccessEmpComponent } from './success-emp/success-emp.component';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ErrorPageComponent,
    FooterComponent,
    EmpHomeComponent,
    ProfileComponent,
    CategoryComponent,
    SignUpComponent,
    EmployerFormComponent,
    LoginComponent,
    JobseekerLoginComponent,
    JobApplicationConfirmationComponent,
    JobsearchComponent,
    JobDescComponent,
    VerifyEmployerComponent,
    UserSettingsComponent,
    JobseekerFormComponent,
    JobPostComponent,
    EmployerProfileComponent,
    SuccessEmpComponent,
    JobseekerProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

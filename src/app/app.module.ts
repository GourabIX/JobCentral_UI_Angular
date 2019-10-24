import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobApplicationConfirmationComponent } from './job-application-confirmation/job-application-confirmation.component';
import { VerifyEmployerComponent } from './verify-employer/verify-employer.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent,
    ContactUsComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    EmpHomeComponent,
    JobPostComponent,
    JobApplicationConfirmationComponent,
    VerifyEmployerComponent,
    UserSettingsComponent,
    JobDescComponent,
    JobseekerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

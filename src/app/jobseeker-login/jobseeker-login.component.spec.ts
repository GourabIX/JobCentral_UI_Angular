import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerLoginComponent } from './jobseeker-login.component';

describe('JobseekerLoginComponent', () => {
  let component: JobseekerLoginComponent;
  let fixture: ComponentFixture<JobseekerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

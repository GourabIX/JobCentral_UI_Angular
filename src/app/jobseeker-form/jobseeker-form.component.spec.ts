import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerFormComponent } from './jobseeker-form.component';

describe('JobseekerFormComponent', () => {
  let component: JobseekerFormComponent;
  let fixture: ComponentFixture<JobseekerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

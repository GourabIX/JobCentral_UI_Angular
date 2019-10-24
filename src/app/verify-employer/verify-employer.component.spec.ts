import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmployerComponent } from './verify-employer.component';

describe('VerifyEmployerComponent', () => {
  let component: VerifyEmployerComponent;
  let fixture: ComponentFixture<VerifyEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

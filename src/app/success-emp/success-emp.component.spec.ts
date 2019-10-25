import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessEmpComponent } from './success-emp.component';

describe('SuccessEmpComponent', () => {
  let component: SuccessEmpComponent;
  let fixture: ComponentFixture<SuccessEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

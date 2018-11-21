import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrenderComponent } from './formrender.component';

describe('FormrenderComponent', () => {
  let component: FormrenderComponent;
  let fixture: ComponentFixture<FormrenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormrenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponceformComponent } from './responceform.component';

describe('ResponceformComponent', () => {
  let component: ResponceformComponent;
  let fixture: ComponentFixture<ResponceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

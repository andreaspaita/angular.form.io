import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformComponent } from './listform.component';

describe('ListformComponent', () => {
  let component: ListformComponent;
  let fixture: ComponentFixture<ListformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

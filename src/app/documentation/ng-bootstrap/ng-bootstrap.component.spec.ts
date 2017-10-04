import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapComponent } from './ng-bootstrap.component';

describe('NgBootstrapComponent', () => {
  let component: NgBootstrapComponent;
  let fixture: ComponentFixture<NgBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersComponent } from './sliders.component';

describe('SlidersComponent', () => {
  let component: SlidersComponent;
  let fixture: ComponentFixture<SlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

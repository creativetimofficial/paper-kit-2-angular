import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsComponent } from './parts.component';

describe('PartsComponent', () => {
  let component: PartsComponent;
  let fixture: ComponentFixture<PartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

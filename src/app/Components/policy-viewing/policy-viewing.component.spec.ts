import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyViewingComponent } from './policy-viewing.component';

describe('PolicyViewingComponent', () => {
  let component: PolicyViewingComponent;
  let fixture: ComponentFixture<PolicyViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolicyViewingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

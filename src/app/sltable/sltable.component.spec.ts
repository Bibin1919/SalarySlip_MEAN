import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SltableComponent } from './sltable.component';

describe('SltableComponent', () => {
  let component: SltableComponent;
  let fixture: ComponentFixture<SltableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SltableComponent]
    });
    fixture = TestBed.createComponent(SltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

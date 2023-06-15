import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SladdComponent } from './sladd.component';

describe('SladdComponent', () => {
  let component: SladdComponent;
  let fixture: ComponentFixture<SladdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SladdComponent]
    });
    fixture = TestBed.createComponent(SladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

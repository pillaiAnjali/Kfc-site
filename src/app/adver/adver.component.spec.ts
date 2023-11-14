import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverComponent } from './adver.component';

describe('AdverComponent', () => {
  let component: AdverComponent;
  let fixture: ComponentFixture<AdverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdverComponent]
    });
    fixture = TestBed.createComponent(AdverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

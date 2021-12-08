import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtomotifComponent } from './otomotif.component';

describe('OtomotifComponent', () => {
  let component: OtomotifComponent;
  let fixture: ComponentFixture<OtomotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtomotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtomotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektronikComponent } from './elektronik.component';

describe('ElektronikComponent', () => {
  let component: ElektronikComponent;
  let fixture: ComponentFixture<ElektronikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElektronikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElektronikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

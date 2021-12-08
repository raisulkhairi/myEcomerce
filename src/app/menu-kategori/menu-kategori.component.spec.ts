import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuKategoriComponent } from './menu-kategori.component';

describe('MenuKategoriComponent', () => {
  let component: MenuKategoriComponent;
  let fixture: ComponentFixture<MenuKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuKategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

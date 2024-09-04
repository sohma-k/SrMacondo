import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaJuegosComponent } from './renta-juegos.component';

describe('RentaJuegosComponent', () => {
  let component: RentaJuegosComponent;
  let fixture: ComponentFixture<RentaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentaJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

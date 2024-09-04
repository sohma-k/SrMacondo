import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaProductosComponent } from './venta-productos.component';

describe('VentaProductosComponent', () => {
  let component: VentaProductosComponent;
  let fixture: ComponentFixture<VentaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

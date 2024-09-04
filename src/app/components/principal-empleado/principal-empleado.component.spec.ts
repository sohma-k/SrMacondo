import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEmpleadoComponent } from './principal-empleado.component';

describe('PrincipalEmpleadoComponent', () => {
  let component: PrincipalEmpleadoComponent;
  let fixture: ComponentFixture<PrincipalEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

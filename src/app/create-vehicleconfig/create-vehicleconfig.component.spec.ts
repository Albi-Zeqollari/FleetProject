import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleconfigComponent } from './create-vehicleconfig.component';

describe('CreateVehicleconfigComponent', () => {
  let component: CreateVehicleconfigComponent;
  let fixture: ComponentFixture<CreateVehicleconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

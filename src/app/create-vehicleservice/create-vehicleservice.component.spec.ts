import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleserviceComponent } from './create-vehicleservice.component';

describe('CreateVehicleserviceComponent', () => {
  let component: CreateVehicleserviceComponent;
  let fixture: ComponentFixture<CreateVehicleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

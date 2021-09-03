import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleconfigComponent } from './update-vehicleconfig.component';

describe('UpdateVehicleconfigComponent', () => {
  let component: UpdateVehicleconfigComponent;
  let fixture: ComponentFixture<UpdateVehicleconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

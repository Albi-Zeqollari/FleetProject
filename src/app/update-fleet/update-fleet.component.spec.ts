import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFleetComponent } from './update-fleet.component';

describe('UpdateFleetComponent', () => {
  let component: UpdateFleetComponent;
  let fixture: ComponentFixture<UpdateFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAvailabilityComponent } from './inventory-availability.component';

describe('InventoryAvailabilityComponent', () => {
  let component: InventoryAvailabilityComponent;
  let fixture: ComponentFixture<InventoryAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

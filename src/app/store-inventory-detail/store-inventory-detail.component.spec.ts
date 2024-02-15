import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryDetailComponent } from './store-inventory-detail.component';

describe('StoreInventoryDetailComponent', () => {
  let component: StoreInventoryDetailComponent;
  let fixture: ComponentFixture<StoreInventoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreInventoryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreInventoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

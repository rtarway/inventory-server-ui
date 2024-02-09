import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFulfillmentComponent } from './store-fulfillment.component';

describe('StoreFulfillmentComponent', () => {
  let component: StoreFulfillmentComponent;
  let fixture: ComponentFixture<StoreFulfillmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreFulfillmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreFulfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

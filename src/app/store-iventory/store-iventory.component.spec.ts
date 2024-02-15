import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreIventoryComponent } from './store-iventory.component';

describe('StoreIventoryComponent', () => {
  let component: StoreIventoryComponent;
  let fixture: ComponentFixture<StoreIventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreIventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

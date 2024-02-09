import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTaskLogoComponent } from './store-task-logo.component';

describe('StoreTaskLogoComponent', () => {
  let component: StoreTaskLogoComponent;
  let fixture: ComponentFixture<StoreTaskLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreTaskLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreTaskLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

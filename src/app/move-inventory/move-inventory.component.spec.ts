import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInventoryComponent } from './move-inventory.component';

describe('MoveInventoryComponent', () => {
  let component: MoveInventoryComponent;
  let fixture: ComponentFixture<MoveInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveInventoryComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoveInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

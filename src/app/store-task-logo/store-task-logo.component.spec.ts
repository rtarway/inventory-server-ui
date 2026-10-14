import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTaskLogoComponent } from './store-task-logo.component';

describe('StoreTaskLogoComponent', () => {
  let component: StoreTaskLogoComponent;
  let fixture: ComponentFixture<StoreTaskLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreTaskLogoComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreTaskLogoComponent);
    component = fixture.componentInstance;
    component.storetask = { id: 1, name: 'Test task' } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

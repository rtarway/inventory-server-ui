import { TestBed } from '@angular/core/testing';

import { StoreTasksServiceService } from './store-tasks.service';

describe('StoreTasksServiceService', () => {
  let service: StoreTasksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTasksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

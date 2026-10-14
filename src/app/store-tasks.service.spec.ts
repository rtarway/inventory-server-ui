import { TestBed } from '@angular/core/testing';

import { StoreTasksService } from './store-tasks.service';

describe('StoreTasksService', () => {
  let service: StoreTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

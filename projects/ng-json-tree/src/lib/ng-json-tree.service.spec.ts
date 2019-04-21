import { TestBed } from '@angular/core/testing';

import { NgJsonTreeService } from './ng-json-tree.service';

describe('NgJsonTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgJsonTreeService = TestBed.get(NgJsonTreeService);
    expect(service).toBeTruthy();
  });
});

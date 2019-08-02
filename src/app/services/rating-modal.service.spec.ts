import { TestBed } from '@angular/core/testing';

import { RatingModalService } from './rating-modal.service';

describe('RatingModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingModalService = TestBed.get(RatingModalService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RatingHttpService } from './rating-http.service';

describe('RatingHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingHttpService = TestBed.get(RatingHttpService);
    expect(service).toBeTruthy();
  });
});

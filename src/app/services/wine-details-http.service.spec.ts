import { TestBed } from '@angular/core/testing';

import { WineDetailsHttpService } from './wine-details-http.service';

describe('WineDetailsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WineDetailsHttpService = TestBed.get(WineDetailsHttpService);
    expect(service).toBeTruthy();
  });
});

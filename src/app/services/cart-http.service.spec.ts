import { TestBed } from '@angular/core/testing';

import { CartHTTPService } from './cart-http.service';

describe('CartHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartHTTPService = TestBed.get(CartHTTPService);
    expect(service).toBeTruthy();
  });
});

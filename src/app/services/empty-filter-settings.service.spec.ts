import { TestBed } from '@angular/core/testing';

import { EmptyFilterSettingsService } from './empty-filter-settings.service';

describe('EmptyFilterSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmptyFilterSettingsService = TestBed.get(EmptyFilterSettingsService);
    expect(service).toBeTruthy();
  });
});

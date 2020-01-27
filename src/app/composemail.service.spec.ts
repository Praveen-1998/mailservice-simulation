import { TestBed } from '@angular/core/testing';

import { ComposemailService } from './composemail.service';

describe('ComposemailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComposemailService = TestBed.get(ComposemailService);
    expect(service).toBeTruthy();
  });
});

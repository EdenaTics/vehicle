/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FleetsService } from './Fleets.service';

describe('Service: Fleets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FleetsService]
    });
  });

  it('should ...', inject([FleetsService], (service: FleetsService) => {
    expect(service).toBeTruthy();
  }));
});

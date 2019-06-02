/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthentService } from './authent.service';

describe('Service: Authent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentService]
    });
  });

  it('should ...', inject([AuthentService], (service: AuthentService) => {
    expect(service).toBeTruthy();
  }));
});

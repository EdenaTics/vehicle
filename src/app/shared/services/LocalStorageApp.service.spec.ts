/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageAppService } from './LocalStorageApp.service';

describe('Service: LocalStorageApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageAppService]
    });
  });

  it('should ...', inject([LocalStorageAppService], (service: LocalStorageAppService) => {
    expect(service).toBeTruthy();
  }));
});

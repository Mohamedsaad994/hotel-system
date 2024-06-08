/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientHomeService } from './clientHome.service';

describe('Service: ClientHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientHomeService]
    });
  });

  it('should ...', inject([ClientHomeService], (service: ClientHomeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { DinoAccessService } from './dino-access.service';

describe('DinoAccessService', () => {
  let service: DinoAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinoAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

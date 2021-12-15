import { TestBed } from '@angular/core/testing';

import { GuardScoreService } from './guard-score.service';

describe('GuardScoreService', () => {
  let service: GuardScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

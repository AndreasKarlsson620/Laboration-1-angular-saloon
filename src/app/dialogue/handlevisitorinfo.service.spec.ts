import { TestBed } from '@angular/core/testing';

import { HandlevisitorinfoService } from './handlevisitorinfo.service';

describe('HandlevisitorinfoService', () => {
  let service: HandlevisitorinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlevisitorinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { UpdateStudentResolverService } from './update-student-resolver.service';

describe('UpdateStudentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateStudentResolverService]
    });
  });

  it('should be created', inject([UpdateStudentResolverService], (service: UpdateStudentResolverService) => {
    expect(service).toBeTruthy();
  }));
});

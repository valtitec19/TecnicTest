import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call triangularSerie', () => {
    let result = service.triangularSerie(4);
    expect(result).toEqual(10);
  });

  it('should call fibonacciSerie', () => {
    let result = service.fibonacciSerie(4);
    expect(result).toEqual(3);
  });

  it('should call numPrimos', () => {
    let result = service.numPrimos(4);
    expect(result).toEqual(7);
  });

  it('should call serieN', () => {
    let result = service.serieN(4);
    expect(result).toEqual(1.6875);
  });
});

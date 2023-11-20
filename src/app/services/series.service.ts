import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }


  triangularSerie(n: number): number {
    let Tn = (n * (n + 1)) / 2;
    return Tn;
  }

  fibonacciSerie(n: number): number {
    let fib = [0 ,1];
    for ( let  i = 2; i< n; i++){
      const next = fib[i-1] + fib[i - 2];
      fib.push(next);
    }
    return fib[fib.length -1];
  }

  numPrimos(nFinal: number) {
    let t = 1000000;
    let matriz = [];
    let nprimo = [];
    let i = 2;
    do {
      if (!matriz[i]) {
        nprimo.push(i);
        for (let n = i << 1; n <= t; n += i) {
          matriz[n] = 1;
        }
      }
      i++;
    } while (nprimo.length < nFinal)
    return nprimo[nFinal - 1];
  }

  serieN(N: number): number {
    let primo = 3 * this.numPrimos(N);
    let tringular = this.triangularSerie(N - 1);
    let fibonacci = 2 * this.fibonacciSerie(N + 1);
    let res = (primo + tringular) / fibonacci;
    // console.log(N);
    // console.log(primo);
    // console.log(tringular);
    // console.log(fibonacci);
    // console.log(res);
    
    return res;
  }


}

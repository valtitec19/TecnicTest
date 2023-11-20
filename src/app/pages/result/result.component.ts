import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberConst, StringConst } from 'src/app/constants/constants';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  number: number = NumberConst.zero;
  fibonacci: string = StringConst.empty;
  triangular: string = StringConst.empty;
  primo: string = StringConst.empty;
  resultado : string = StringConst.empty;
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((parameters) => {
      if (parameters['n']) {
        this.number = Number(parameters['n']);
      }
    });
  }

  ngOnInit(): void {
    this.triangular = String(this.seriesService.triangularSerie(this.number - 1));    
    this.fibonacci = String(2 * this.seriesService.fibonacciSerie(this.number + 2));
    this.primo = String(3 * this.seriesService.numPrimos(this.number));
    this.resultado = String(this.seriesService.serieN(this.number).toFixed(3));
  }

  goBack() {
    this.router.navigate(['home']);
  }

}

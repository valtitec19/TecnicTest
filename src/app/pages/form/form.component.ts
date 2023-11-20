import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooleanConst } from 'src/app/constants/constants';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errorMsg?: number;
  type: boolean = BooleanConst.true;
  loading: boolean = BooleanConst.false;
  result: boolean = BooleanConst.true;
  scrrenEnable: boolean = BooleanConst.true;
  response: string = '';
  msg: string = '';
  showDisclaimer: boolean = BooleanConst.false;
  caracteres: string = 'Caracteres especiales: _,@$!%*¿?&.<>{}()+#~¡´-'
  constructor(
    public seriesService: SeriesService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      number: ['',[Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
   }

  ngOnInit(): void {
    // this.seriesService.triangularSerie(8);
    // this.seriesService.fibonacciSerie(10);
    // this.seriesService.numPrimos(5);
    this.seriesService.serieN(9);
  }

  click(){
    console.log(this.form.controls['number']);
    
  }

}

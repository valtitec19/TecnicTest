import { Component, Input, OnInit } from '@angular/core';
import { NumberConst, StringConst } from 'src/app/constants/constants';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() number: number = NumberConst.zero;
  fibonacci: string = StringConst.empty;
  triangular: string = StringConst.empty;
  primo: string = StringConst.empty;
  constructor() { }

  ngOnInit(): void {
  }

  goBack(){

  }

}

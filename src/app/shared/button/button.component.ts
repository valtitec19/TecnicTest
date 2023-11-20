import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooleanConst } from 'src/app/constants/constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() showLoading:boolean = BooleanConst.false;
  @Input() disable:boolean = BooleanConst.false;
  @Input() type:boolean = BooleanConst.true;
  @Output() onClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  handlerClick() {
    this.onClick.emit(true);
  }

}

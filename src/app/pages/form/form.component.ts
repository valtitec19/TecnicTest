import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NumberConst } from 'src/app/constants/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  n: number = NumberConst.zero;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }

  ngOnInit(): void {
  }

  click() {
    if (this.form.valid) {
      this.router.navigate(['home/result/' + this.form.controls['number'].value]);
    }
  }

}

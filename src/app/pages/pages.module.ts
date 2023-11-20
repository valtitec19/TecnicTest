import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
// import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    FormComponent,
    ResultComponent
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormComponent
  ]
})
export class PagesModule { }

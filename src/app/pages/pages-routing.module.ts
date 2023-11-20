import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: FormComponent, }, 
  { path: 'result', component: ResultComponent, }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }

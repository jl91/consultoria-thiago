import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InputOutputComponent} from './input-output/input-output.component';


const routes: Routes = [
  {
    path: 'input-output',
    component: InputOutputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

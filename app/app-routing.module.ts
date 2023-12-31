import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from './country-info/country-info.component';


const routes: Routes = [
  { path: '', component: CountryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

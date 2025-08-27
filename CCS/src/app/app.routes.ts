//import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './pages/shop/shop';
import { SoftwareComponent } from './pages/software/software';
import { HireComponent } from './pages/hire/hire';

export const routes: Routes = [
    { path: '', component: ShopComponent},
    { path: 'software', component: SoftwareComponent},
    { path: 'hireMe', component: HireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MjjComponent } from '../mjj/mjj.component';
import { JmjComponent } from '../jmj/jmj.component';

const routes: Routes = [
  { path: '', redirectTo: '/mjj', pathMatch: 'full' },
  { path: 'mjj', component: MjjComponent },
  { path: 'jmj', component: JmjComponent },


////  { path: '', redirectTo: '/mjj', pathMatch: 'full' },
////  { path: 'mjj', component: MjjComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

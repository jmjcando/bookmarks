import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MjjComponent } from '@app-mjj/mjj.component';
import { JmjContainerComponent } from '@app-jmj/jmj-container.component';
import { JmjDetailComponent } from '@app-jmj/jmj-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/mjj', pathMatch: 'full' },
  { path: 'mjj', component: MjjComponent },
  { path: 'jmj', component: JmjContainerComponent, data: { id: 'jmj' } },
  { path: 'mock', component: JmjDetailComponent, data: { id: 'mock' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

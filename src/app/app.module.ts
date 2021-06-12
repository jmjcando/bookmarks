import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MjjComponent } from '@app-mjj/mjj.component';
import { JmjDetailComponent } from '@app-jmj/jmj-detail.component';
import { JmjMenuComponent } from '@app-jmj/jmj-menu.component';
import { JmjContainerComponent } from '@app-jmj/jmj-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MjjComponent,
    JmjDetailComponent,
    JmjMenuComponent,
    JmjContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

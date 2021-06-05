import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MjjComponent } from './mjj/mjj.component';
import { JmjComponent } from './jmj/jmj.component';

@NgModule({
  declarations: [
    AppComponent,
    MjjComponent,
    JmjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

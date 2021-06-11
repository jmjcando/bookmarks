import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MjjComponent } from './mjj/mjj.component';
import { JmjComponent } from './jmj/jmj.component';
import { JmjMenuComponent } from './jmj/jmj-menu.component';
import { JmjContainerComponent } from './jmj/jmj-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MjjComponent,
    JmjComponent,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetsModule } from './sweets/sweets.module';
import { DefaultPagesModule } from './default-pages/default-pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetsModule,
    DefaultPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

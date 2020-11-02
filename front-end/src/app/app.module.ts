import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseNavbarComponent } from './collapse-navbar/collapse-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SadotComponent} from './sadot/sadot.component';
import {LeftBarComponent} from './left-bar/left-bar.component';
import {BodyComponent} from './body/body.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, SadotComponent, LeftBarComponent, BodyComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'about',
        component: SadotComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LeftBarComponent} from './left-bar/left-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SadotComponent } from './sadot/sadot.component';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, LeftBarComponent, ContactComponent, AboutComponent, SadotComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'contact',
        component: ContactComponent
      }, {
        path: 'sadot',
        component: SadotComponent
      }, {
        path: '',
        redirectTo: 'sadot',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
import {Component} from '@angular/core';

@Component({
  selector: 'app-root', template: `
    <div>
      <app-nav-bar></app-nav-bar>
      <app-left-bar></app-left-bar>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

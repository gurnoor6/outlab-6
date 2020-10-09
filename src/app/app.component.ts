import { Component } from '@angular/core';
import {routeAnimations} from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
  	routeAnimations
  ]
})
export class AppComponent {
  title = 'outlab6';
  prepareRoute(outlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

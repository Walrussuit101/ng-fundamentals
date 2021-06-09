import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

import {
  EventThumbnailComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [ //providers are shared across modules...
    EventService,
    ToastrService,
    EventRouteActivator,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService //...like this
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}

/**
 * in tsconfig.json i had to add:
 * "strictPropertyInitialization": false
 * for error: 
 * "Property has no initializer and is not definitely assigned in the constructor",
 * 
 * ideally i would add some kind of `empty interface factory` for each interface so they are always assigned, 
 * but the tutorial doesn't do this sooooo.. using a work around
 */
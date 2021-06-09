import { Routes } from '@angular/router';
import {
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    EventsListComponent,
    CreateEventComponent
} from './events/index';
import { Error404Component } from './errors/404.component';


export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },

    //user feature module
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
]
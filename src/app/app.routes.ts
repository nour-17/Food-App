import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { single } from 'rxjs';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'about',
        component: HomeComponent

    },
    {
        path: 'menu',
        component: HomeComponent

    },
    {
        path: 'pages',
        component: HomeComponent

    },
    {
        path: 'contact',
        component: HomeComponent

    },
    
    {
        path: '**',
        redirectTo: 'home',
    }
];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent  } from './home/home.component';
import { ProfileComponent  } from './profile/profile.component';
import { AuthGuard } from  './auth.guard';

const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full',
        component : HomeComponent,
    },    
    { 
        path: 'profile',
        component : ProfileComponent,
        canActivate : [AuthGuard]
    },
    { path: '**', redirectTo: '' },
];

export const appRoutingProviders : any [] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);

// export class AppRoutingModule {}
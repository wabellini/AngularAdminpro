import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UsersComponent } from './users/users.component';
// import { GraphicsComponent } from './graphics/graphics.component';

const routes: Routes = [
    {   //1. Se comenta para que la ruta quede dashboard/loquesea
        //   en vez de solo /loquesea
        //1. path: '',
        path: 'dashboard',
        component: PagesComponent,
        // lazy loading ---------------
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
        // children: [
        //     //1. { path: 'dashboard', component: DashboardComponent },
        //     { path: '', component: DashboardComponent },
        //     { path: 'users', component: UsersComponent },
        //     { path: 'graphics', component: GraphicsComponent },
        //     //1. { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        // ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

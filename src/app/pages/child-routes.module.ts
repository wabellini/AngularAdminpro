import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GraphicsComponent } from './graphics/graphics.component';

const childRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'graphics', component: GraphicsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }

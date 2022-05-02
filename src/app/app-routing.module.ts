import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  //Rutas privadas ->  path: '/dashboard' PagesRouting
  //Rutas publicos ->  path: '/auth' AuthRouting
  
  //Ruta por defecto
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

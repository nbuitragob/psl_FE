import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: 'profile', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routableComponents = [
  PageNotFoundComponent,
];

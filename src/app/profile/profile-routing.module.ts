import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile-component/profile.component';
import { ProfileModule } from './profile.module';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

export const routedComponents = [
  ProfileComponent,
];

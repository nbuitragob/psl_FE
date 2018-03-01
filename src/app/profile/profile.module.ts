import { routedComponents, ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile-component/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {RatingModule} from 'primeng/rating';
import {DragDropModule} from 'primeng/dragdrop';
import {DataTableModule} from 'primeng/datatable';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';


@NgModule({
    imports: [
      CommonModule,
      ProfileRoutingModule,
      ReactiveFormsModule,
      FormsModule,

      AutoCompleteModule,
      RatingModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      InputTextareaModule,
      DragDropModule,
      DataTableModule,
      CardModule,
      TabMenuModule
    ],
    declarations: [
      routedComponents,
    ],
    providers: [
      ,
    ],
  })
export class ProfileModule {
}

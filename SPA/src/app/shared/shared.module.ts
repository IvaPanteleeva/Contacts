import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes
import { TableIndexPipe } from './pipes/table-index.pipe';
import { UserInitialsPipe } from './pipes/user-initials.pipe';

// PrimeNg Modules
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [TableIndexPipe, UserInitialsPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    AvatarModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    ButtonModule,
  ],
  exports: [
    RouterModule,
    TableModule,
    TableIndexPipe,
    UserInitialsPipe,
    AvatarModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    CalendarModule,
    ButtonModule,

  ],
})
export class SharedModule {}

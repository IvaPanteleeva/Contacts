import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { layoutReducers } from './+base-state/reducers/layout.reducers';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forFeature('layout', layoutReducers),
  ],
})
export class LayoutsModule {}

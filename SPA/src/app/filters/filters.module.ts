import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FilterEffects } from './+state/effects/filters.effects';
import { StoreModule } from '@ngrx/store';
import { filtersReducer } from './+state/reducers/filters.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FilterEffects]),
    StoreModule.forFeature('filters', filtersReducer),
  ],
})
export class FiltersModule {}

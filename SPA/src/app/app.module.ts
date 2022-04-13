import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+state/reducers/app.reducers';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ErrorSuccessEffects } from './+state/effects/error-success-messages.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [AppComponent],
  // If we have authentication logic, we can add meta reducer that will reset the state on logout
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ErrorSuccessEffects]),
    LayoutsModule,
    HttpClientModule,
    ToastModule,
    StoreDevtoolsModule.instrument({
      name: 'Contacts App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

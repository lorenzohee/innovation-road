import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'innovation-road' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { EmergencyComponent } from './_components/emergency/emergency.component';
import { MessageComponent } from './_components/message/message.component';
import { MessageContentComponent } from './_pages/message-content/message-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmergencyComponent,
    MessageComponent,
    MessageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

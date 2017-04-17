import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeLibraryRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Provides the imports needed for Angular to facilitate Reactive Forms.
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { LstCotationsComponent } from './lst-cotations/lst-cotations.component';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FrmCotationComponent } from './frm-cotation/frm-cotation.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient()
  ]
});

@NgModule({
  declarations: [
    AppComponent,
    LstCotationsComponent,
    FrmCotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    JsonPipe,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

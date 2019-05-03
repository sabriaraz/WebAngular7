import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { SehirlerComponent } from './sehirler/sehir-list/sehirler.component';
import { SehirDetayComponent } from './sehirler/sehir-detay/sehir-detay.component';
import { PersonelListComponent } from './personel/personel-list/personel-list.component';
import { PersonelDetayComponent } from './personel/personel-detay/personel-detay.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SehirlerComponent,
    SehirDetayComponent,
    PersonelListComponent,
    PersonelDetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

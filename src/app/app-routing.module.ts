import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SehirlerComponent } from './sehirler/sehir-list/sehirler.component';
import { PersonelListComponent } from './personel/personel-list/personel-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sehList', component: SehirlerComponent},
  {path: 'perList', component: PersonelListComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

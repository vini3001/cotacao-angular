import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LstCotationsComponent } from './lst-cotations/lst-cotations.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'list-cotations', component: LstCotationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

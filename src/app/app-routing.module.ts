import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LstCotationsComponent } from './lst-cotations/lst-cotations.component';
import { FrmCotationComponent } from './frm-cotation/frm-cotation.component';

const routes: Routes = [
  {path: '', component: FrmCotationComponent},
  {path: 'list-cotations', component: LstCotationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

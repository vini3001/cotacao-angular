import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CotacaoService } from './cotacao.service';
import { Router } from '@angular/router';
import { Cotacao } from './models/Cotacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [provideNativeDateAdapter()],  
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  cotacao: Cotacao = {};

  constructor(private service: CotacaoService, private router: Router) {}

  submitForm() {
    this.service.InserirCotacao(this.cotacao).subscribe({
      next: () => {
        alert('cotação adicionada com sucesso')
      }
    })
  }

  openList() {
    this.router.navigate(['/list-cotations'])
  }

  title = 'angular-cotacao';
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}

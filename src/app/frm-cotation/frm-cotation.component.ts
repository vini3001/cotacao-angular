import { Component } from '@angular/core';
import { Cotacao } from '../models/Cotacao';
import { CotacaoService } from '../cotacao.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-frm-cotation',
  templateUrl: './frm-cotation.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './frm-cotation.component.css'
})
export class FrmCotationComponent {
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

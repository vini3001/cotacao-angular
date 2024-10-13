import { ChangeDetectorRef, Component } from '@angular/core';
import { Cotacao } from '../models/Cotacao';
import { CotacaoService } from '../cotacao.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-frm-cotation',
  templateUrl: './frm-cotation.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './frm-cotation.component.css'
})
export class FrmCotationComponent {
  cotacao: Cotacao = {};

  constructor(private serviceCotacao: CotacaoService,private cd: ChangeDetectorRef, private api: ApiService, private router: Router) {}

  submitForm() {
    this.serviceCotacao.InserirCotacao(this.cotacao).subscribe({
      next: () => {
        alert('cotação adicionada com sucesso')
      }
    })
  }

  openList() {
    this.router.navigate(['/list-cotations'])
  }

  onClick() {
    this.cd.detectChanges();
    this.cotacao.valor_dolar = undefined
    this.cotacao.valor_euro = undefined
    this.cotacao.valor_pesos = undefined
    let startDate = this.cotacao.data_apuracao!.getFullYear().toString() + (this.cotacao.data_apuracao!.getMonth() + 1).toString().padStart(2, '0') + (this.cotacao.data_apuracao!.getDate()).toString().padStart(2, '0')

    this.api.BuscarDolar(startDate).subscribe({
      next: (coin) => {
        if (coin.length !== 0) {this.cotacao.valor_dolar = parseFloat((parseFloat(coin[0].bid) * this.cotacao.valor!).toFixed(2))}
        else {alert('Sem registros de cotação para dólar')}
        this.cd.detectChanges();
      }
    })
    this.api.BuscarEuro(startDate).subscribe({
      next: (coin) => {
        if (coin.length !== 0) {this.cotacao.valor_euro = parseFloat((parseFloat(coin[0].bid) * this.cotacao.valor!).toFixed(2))}
        else {alert('Sem registros de cotação para euro')}
        this.cd.detectChanges();
      }
    })
    this.api.BuscarPesos(startDate).subscribe({
      next: (coin) => {
        if (coin.length !== 0) {this.cotacao.valor_pesos = parseFloat((parseFloat(coin[0].bid) * this.cotacao.valor!).toFixed(2))}
        else {
          alert('Sem registros de cotação para pesos')
        }
        this.cd.detectChanges();
      }
    })


  }

  title = 'angular-cotacao';
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}

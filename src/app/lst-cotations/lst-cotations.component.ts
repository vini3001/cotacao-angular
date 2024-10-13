import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CotacaoService } from '../cotacao.service';
import { Router } from '@angular/router';
import { Cotacao } from '../models/Cotacao';

@Component({
  selector: 'app-lst-cotations',
  templateUrl: './lst-cotations.component.html',
  styleUrl: './lst-cotations.component.css'
})
export class LstCotationsComponent implements OnInit{
  cotacoes: Cotacao[] = []

  constructor(private service: CotacaoService,private cd: ChangeDetectorRef, private router: Router) {}
  
  ngOnInit(): void {
    this.obterDados()
  }

  openForm() {
    this.router.navigate(['/'])
  }

  obterDados() {
    this.service.ListarCotacao()
    .subscribe({
      next: (data) => {
        this.cotacoes = data
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao obter cotações:', err);
      }})
  }
}

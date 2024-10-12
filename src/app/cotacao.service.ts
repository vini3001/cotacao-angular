import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cotacao } from './models/Cotacao';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {
  cotacoes: Array<Cotacao> = []
  urlApi = 'http://localhost:3000/cotacoes'
  constructor(private http: HttpClient) {
  }

  public InserirCotacao(cotacao: Cotacao) {
    console.log('rota adicionar' + JSON.stringify(cotacao))
    return this.http.post<boolean>(this.urlApi, cotacao)
  }

  public ListarCotacao(): Observable<Cotacao[]> {
    console.log('rota listar cotações')
    return this.http.get<Cotacao[]>(this.urlApi)
  }
}

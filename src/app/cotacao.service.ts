import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cotacao } from './models/Cotacao';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {
  urlApi = 'http://localhost:3000/cotacoes'
  constructor(private http: HttpClient) {
  }

  public InserirCotacao(cotacao: Cotacao) {
    console.log('rota adicionar' + JSON.stringify(cotacao))
    return this.http.post<boolean>(this.urlApi, cotacao)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cotacao } from './models/Cotacao';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {
  urlApi = 'localhost:3000/cotacao'
  constructor(private http: HttpClient) {
  }

  public inserir(cotacao: Cotacao) {
    console.log('rota adicionar' + JSON.stringify(cotacao))
    return this.http.post<boolean>(this.urlApi + 'calculo', cotacao)
  }
}

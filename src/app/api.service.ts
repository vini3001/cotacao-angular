import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coinApi } from './models/Api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi = 'https://economia.awesomeapi.com.br/json/daily/'
  urlDataIni = '?start_date='
  urlDataFim = '&end_date=' + new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString().toString().padStart(2, '0') + (new Date().getDate()).toString().padStart(2, '0')
  constructor(private http: HttpClient) {
  }

  public BuscarDolar(dataIni: string) {
    console.log('rota dólar api')
    return this.http.get<coinApi[]>(this.urlApi + 'USD' + this.urlDataIni + dataIni + this.urlDataFim)
  }

  public BuscarEuro(dataIni: string) {
    console.log('rota euro api')
    return this.http.get<coinApi[]>(this.urlApi + 'EUR' + this.urlDataIni + dataIni + this.urlDataFim)
  }

  public BuscarPesos(dataIni: string) {
    console.log('rota pesos mexicanos api')
    return this.http.get<coinApi[]>(this.urlApi + 'MXN' + this.urlDataIni + dataIni + this.urlDataFim)
  }
}

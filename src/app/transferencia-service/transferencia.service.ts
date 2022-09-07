import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trasnferencia } from '../models/transferencias.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: Trasnferencia[];

  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  todas(): Observable<Trasnferencia[]>{
    return this.httpClient.get<Trasnferencia[]>(this.url);
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adiciona(transferencia: Trasnferencia){
    this.atualizaData(transferencia);

    return this.httpClient.post(this.url, transferencia);
  }

  private atualizaData(transferencia: any){
    transferencia.data = new Date();
    return transferencia;
  }
}

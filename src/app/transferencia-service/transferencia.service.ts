import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: Object[];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adiciona(transferencia: Object){
    this.atualizaData(transferencia);

    this.listaTransferencias.push(transferencia);
  }

  private atualizaData(transferencia: any){
    transferencia.data = new Date();
    return transferencia;
  }
}

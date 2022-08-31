import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir() {
    const valoresEmitidos = {valor: this.valor, destino: this.destino};

    this.aoTransferir.emit(valoresEmitidos);

    this.valor = 0;
    this.destino = 0;
 
  }

}

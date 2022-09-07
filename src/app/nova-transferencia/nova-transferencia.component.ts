import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Trasnferencia } from '../models/transferencias.models';
import { TransferenciaService } from '../transferencia-service/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir() {
    const valoresEmitidos: Trasnferencia = {valor: this.valor, destino: this.destino};

    this.service.adiciona(valoresEmitidos).subscribe(
      (resultado) =>{
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.log(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}

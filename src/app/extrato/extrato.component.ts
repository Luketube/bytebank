import { Component, Input, OnInit } from '@angular/core';
import { Trasnferencia } from '../models/transferencias.models';
import { TransferenciaService } from '../transferencia-service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Object[];

  constructor(private service: TransferenciaService) { }
  
  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Trasnferencia[]) => {
      this.transferencias = transferencias;
    })
  }
  
}

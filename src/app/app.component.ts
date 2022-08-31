import { Component } from '@angular/core';
import { TransferenciaService } from './transferencia-service/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BytBank';

  constructor(private service: TransferenciaService){}

  transferir($event: Object){

    this.service.adiciona($event);
  }
}


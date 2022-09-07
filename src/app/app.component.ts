import { Component } from '@angular/core';
import { Trasnferencia } from './models/transferencias.models';
import { TransferenciaService } from './transferencia-service/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BytBank';
}


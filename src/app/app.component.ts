import { Component } from '@angular/core';
import { Prodotto, Rating } from './models/prodotto';
import { PRODOTTI } from './data/prodotti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon';
  ratingTrustPilot:Rating={
    rate:4.9,
    count:799
  }
  prodottoDelMese:Prodotto = PRODOTTI[3]
}

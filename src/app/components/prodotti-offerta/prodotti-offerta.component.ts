import { Component } from '@angular/core';
import { PRODOTTI_IN_OFFERTA } from '../../data/prodotti';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-offerta',
  templateUrl: './prodotti-offerta.component.html',
  styleUrl: './prodotti-offerta.component.css'
})
export class ProdottiOffertaComponent {
prodotti: Prodotto[] = PRODOTTI_IN_OFFERTA
}

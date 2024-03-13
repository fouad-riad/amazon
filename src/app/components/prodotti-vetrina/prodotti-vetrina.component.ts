import { Component } from '@angular/core';
import { PRODOTTI } from '../../data/prodotti';
import { Prodotto } from '../../models/prodotto';



@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent {
prodotti: Prodotto[] = PRODOTTI
rimuoviProdotto(prodotto:Prodotto){
 let i= this.prodotti.indexOf(prodotto);
 if(i> -1){
  this.prodotti.splice(i,1);
 }
}
}

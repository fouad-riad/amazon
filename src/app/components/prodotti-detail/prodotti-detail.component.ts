import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotti-detail',
  templateUrl: './prodotti-detail.component.html',
  styleUrl: './prodotti-detail.component.css'
})
export class ProdottiDetailComponent implements OnInit {

prodotto?:Prodotto;

constructor(private prodottiService: ProdottiService, private route: ActivatedRoute){


}

ngOnInit(): void {

  const id =parseInt (this.route.snapshot.paramMap.get('id')!);
  //chiamata ajax per recuperare il singolo prodotto
  this.prodottiService.getProdottoById(id)
  .subscribe(dati =>this.prodotto=dati);
}
}

import { Injectable } from '@angular/core';
import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private htpp :HttpClient) {}
    getProdotti(): Observable<Prodotto[]>{
    return this.htpp.get<Prodotto[]>("https://fakestoreapi.com/products")
   }
   getCategorie(): Observable<string[]>{
    return this.htpp.get<string[]>("https://fakestoreapi.com/products/categories")
   }
   getProdottoById(id:number):Observable<Prodotto>{
    return this.htpp.get<Prodotto>("https://fakestoreapi.com/products/"+id)
   }
   getProdottiByCategoria(categoria:string):Observable<Prodotto[]>{
    return this.htpp.get<Prodotto[]>("https://fakestoreapi.com/products/category/"+categoria)
   }

   }
 /*  getProdotti():Prodotto[] {
    return PRODOTTI;
    } */


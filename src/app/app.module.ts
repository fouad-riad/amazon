import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { ProdottiOffertaComponent } from './components/prodotti-offerta/prodotti-offerta.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './components/categorie/categorie.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProdottiDetailComponent } from './components/prodotti-detail/prodotti-detail.component';
import { ProdottiCategoriaComponent } from './components/prodotti-categoria/prodotti-categoria.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent,
    HeaderComponent,
    RatingComponent,
    ProdottiOffertaComponent,
    CategorieComponent,
    SpinnerComponent,
    ContattiComponent,
    ProdottiDetailComponent,
    ProdottiCategoriaComponent,
    ArticoliListComponent,
    ArticoloDetailComponent,
    ArticoloAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

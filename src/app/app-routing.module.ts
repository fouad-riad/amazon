import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';
import { ProdottiDetailComponent } from './components/prodotti-detail/prodotti-detail.component';
import { ProdottiCategoriaComponent } from './components/prodotti-categoria/prodotti-categoria.component';

import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';

const routes: Routes = [
  { path: '', component: ProdottiVetrinaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'preview', component: ProdottoPreviewComponent },
  { path: 'prodotto/:id', component: ProdottiDetailComponent },
  { path: 'prodotti/categoria/:cat', component: ProdottiCategoriaComponent },
  { path: 'blog', component: ArticoliListComponent },
  { path: 'blog/nuovo', component: ArticoloAddComponent },
  {path: 'blog/:articoloId',component: ArticoloDetailComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { RechercheParCategorieComponent } from './components/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './components/recherche-par-nom/recherche-par-nom.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';

const routes: Routes = [
  {path:"produits", component:ProduitsComponent},
  {path:"add-produit", component:AddProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full" },
  {path:"updateProduit/:id", component:UpdateProduitComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

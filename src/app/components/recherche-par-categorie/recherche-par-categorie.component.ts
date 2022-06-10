import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {

  IdCategorie!: number;
  categories: Categorie[];
  produits!: Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(
      cats =>{
        this.categories=cats;
      }
    )
  }

  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie).
    subscribe(prods =>{this.produits=prods});    
  }

}

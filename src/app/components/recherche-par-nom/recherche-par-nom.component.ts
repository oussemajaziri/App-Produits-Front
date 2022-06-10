import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  nomProduit!: string;
  produits!: Produit[];
  allProduits! : Produit[];
  searchTerm! : string;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });      
  }

  rechercherProds() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe(
      prods => {
        this.allProduits = prods;
        console.log(prods);
      }
    )
  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter(item =>
      item.nomProduit.toLowerCase().includes(filterText));
  }

}

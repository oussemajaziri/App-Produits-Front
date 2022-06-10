import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
    //this.produits=this.produitService.listeProduits();
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe(
      prods => {
        console.log(prods);
        this.produits = prods
      }
    )
  }
  
  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }

}

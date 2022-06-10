import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  message: string;
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;
  constructor(private produitService: ProduitService,
              private router: Router) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(
      cats =>{
        this.categories=cats;
      }
    )
  }

  addProduit() {
    console.log(this.newProduit);
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.addProduit(this.newProduit).subscribe(
      prod => {
        console.log(prod)
      }
    )
    this.router.navigate(['produits']);
  }

}

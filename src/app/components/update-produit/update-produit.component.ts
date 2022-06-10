import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
        this.categories = cats;
        console.log(cats);
      });

    console.log(this.activatedRoute.snapshot.params['id']);
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(
      (prod) => {
        this.currentProduit = prod;
        this.updatedCatId = this.currentProduit.categorie.idCat;
      }
    );
 
  }

  updateProduit() {
    /*   this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId); */
    this.currentProduit.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(
      prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      }
    )

  }

}

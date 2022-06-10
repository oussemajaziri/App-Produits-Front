import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  produits: Produit[];
  categories: Categorie[];
  constructor(private httpClient: HttpClient) {
    // this.categories = [
    //   { idCat: 1, nomCat: "PC" },
    //   { idCat: 2, nomCat: "Imprimante" }
    // ];


    // this.produits = [
    //   { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"), categorie: { idCat: 1, nomCat: "PC" } },
    //   { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), categorie: { idCat: 2, nomCat: "Imprimante" } },
    //   { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie: { idCat: 1, nomCat: "PC" } }
    // ];
  }

  listeProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(apiURL);
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this.httpClient.post<Produit>(apiURL, produit, httpOptions);
  }

  supprimerProduit(id: number) {
    return this.httpClient.delete(`${apiURL}/${id}`)
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(`${apiURL}/${id}`);
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(prod: Produit): Observable<Produit> {
    this.listeProduits();
    return this.httpClient.put<Produit>(apiURL, prod, httpOptions);
  }

  listeCategories(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${apiURL}/cat`)
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`${apiURL}/prodscat/${idCat}`);
  }

  rechercherParNom(nom: string): Observable<Produit[]> {
    const url = `${apiURL}/prodsByName/${nom}`;
    return this.httpClient.get<Produit[]>(url);
  }

}

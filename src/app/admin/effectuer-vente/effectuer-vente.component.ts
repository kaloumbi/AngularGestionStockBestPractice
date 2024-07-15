import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from '../../service/article.service';
import { ArticleI } from '../../model/article-i';
import { VenteArticleI } from '../../model/vente-article-i';
import { VenteService } from '../../service/vente.service';

@Component({
  selector: 'app-effectuer-vente',
  templateUrl: './effectuer-vente.component.html',
  styleUrls: ['./effectuer-vente.component.css']
})
export class EffectuerVenteComponent implements OnInit {

  articlesList: ArticleI[] = [];
  venteUser: VenteArticleI[] = [];
  venteForm: FormGroup;
  articlesSelectionnes: { [id: number]: boolean } = {};
  quantitesSelectionnees: { [id: number]: number } = {};

  constructor(private articleService: ArticleService, private fb: FormBuilder, private venteService: VenteService) {
    this.venteForm = this.fb.group({
      choisis: [[]],
      qteChoisie: [[]]
    });
  }

  ngOnInit() {
    this.listArticleVente();
  }

  effectuerVente() {
    // Logique pour effectuer la vente
    alert("ok")
    console.log(this.venteUser);
    alert("Vente effectuée !");
    this.venteService.effectuerVente(this.venteUser).subscribe((data) => {
      console.log("Vente", data);
    },
    (error)=>error.console.log(error)
    )
  }

  listArticleVente() {
    this.articleService.getListArticles().subscribe(data => {
      this.articlesList = data.filter((etat: ArticleI) => etat.etat_article === "ACTIF");
      console.log(this.articlesList);
    });
  }

   updateArticleSelection(id_article: number, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      if (!this.venteUser.some(article => article.id_article === id_article)) {
        this.venteUser.push({ quantite_vente_article: 0, id_article });
        console.log("Checked Item", this.venteUser);
        
      }
    } else {
      const index = this.venteUser.findIndex(article => article.id_article === id_article);
      if (index !== -1) {
        this.venteUser.splice(index, 1);
      }
    }
  }

  updateArticleQuantity(id_article: number, event: any) {
    const inputElement = event.target as HTMLInputElement;
    const quantite = inputElement.valueAsNumber;
    const article = this.venteUser.find(article => article.id_article === id_article);
    if (article) {
      article.quantite_vente_article = quantite;
    }
  }
}

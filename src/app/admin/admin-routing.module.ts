import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { VenteComponent } from './vente/vente.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { VenteDetailComponent } from './vente-detail/vente-detail.component';
import { EffectuerVenteComponent } from './effectuer-vente/effectuer-vente.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      //{ path: "", redirectTo: "/listArticle", pathMatch: "full"},
      {path: "listArticle", component: DashboardComponent },
      {path: "article/:id/detail", component: ArticleDetailComponent },
      { path: "listeVentes", component: VenteComponent },
      { path: "vente/:id/detail", component: VenteDetailComponent },
      {path: "effectuerVent", component: EffectuerVenteComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

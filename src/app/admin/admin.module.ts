import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DataTablesModule } from 'angular-datatables';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { VenteComponent } from './vente/vente.component';
import { AppComponent } from '../app.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ArticleDetailComponent,
        VenteComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule, ///don't oblied
        ReactiveFormsModule,
        RouterModule //don't oblied
      ,
        DataTablesModule,
        //VenteComponent,
        AppComponent,
        LayoutComponent
    ]
})
export class AdminModule { }

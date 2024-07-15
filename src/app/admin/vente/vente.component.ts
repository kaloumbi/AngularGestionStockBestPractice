import { Router } from '@angular/router';
import { VenteI } from './../../model/vente-i';
import { Component, OnInit } from '@angular/core';
import { VenteService } from '../../service/vente.service';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-vente',
  //standalone: true,
  //imports: [DataTablesModule],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent implements OnInit{

  venteList: VenteI[] = [];
  venteDetail !: VenteI;
  

  dtOptions: Config = {};
  dttrigger: Subject<any> = new Subject();

  constructor(private venteService : VenteService, private router: Router) { }  

  ngOnInit() {
    this.getAllVente()

    //Table name
    this.dtOptions = {
      pagingType: 'full_members'
    };
  }

  getAllVente() {
    return this.venteService.getListVente().subscribe(
      (data) => {
        console.log("Toutes les données ventes", data);
        this.venteList = data.filter((r: VenteI) => r.etat_vente === "ACTIF");

        this.dttrigger.next(this.venteList);
        
      }
    );
  }

  getVente(id: number) {
    this.router.navigate([`admin/vente/${id}/detail`]);
  }

  deleteVente(id: number) {

    return this.venteService.delOneVente(id).subscribe()
  }

  
  callVenteComp() {
    this.router.navigate(["/admin/effectuerVent"]);
  }

}

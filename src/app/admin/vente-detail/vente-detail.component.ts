import { Component, Input } from '@angular/core';
import { VenteService } from '../../service/vente.service';
import { VenteI } from '../../model/vente-i';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vente-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vente-detail.component.html',
  styleUrl: './vente-detail.component.css'
})
export class VenteDetailComponent {

  detailVente!: VenteI;

  constructor(private venteService: VenteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDetailVente();
  }


  getDetailVente(): void {
    
    //declaration de la constente nous permettant de recuperer l'id pour pouvoir la passer à notre fonction
    const id = Number(this.route.snapshot.paramMap.get('id'));
    

    this.venteService.getDetailVente(id).subscribe((data) => {
      this.detailVente = data;
      console.log("Mon detail vente", this.detailVente);
    })
  }

  goBack() {
    this.router.navigate(["/admin/listeVentes"]);
  }

}

import { Injectable } from '@angular/core';
import { UrlApi } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { VenteI } from '../model/vente-i';
import { Observable } from 'rxjs';
import { VenteArticleI } from '../model/vente-article-i';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private urlAdmin = UrlApi.urlApiArticleAdmin;

  constructor(private http: HttpClient) { }


  //lister les ventes

  getListVente() : Observable<VenteI[]> {

    return this.http.get<VenteI[]> (`${this.urlAdmin}/ventes/listeVente`)
  }

  getDetailVente(id: number): Observable<VenteI> {
    return this.http.get<VenteI> (`${this.urlAdmin}/vente/${id}/detail`)
  }

  delOneVente(id: number) : Observable<VenteI>{
    return this.http.delete<VenteI> (`${this.urlAdmin}/ventes/deleteVente/${id}`)
  }

  
  effectuerVente(vente: VenteArticleI[]) : Observable<VenteArticleI[]> {
    
    return this.http.post<VenteArticleI[]>(`${this.urlAdmin}/vente/effectuerVente`, vente);
  }


}

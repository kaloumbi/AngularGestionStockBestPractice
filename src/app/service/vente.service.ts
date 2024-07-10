import { Injectable } from '@angular/core';
import { UrlApi } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { VenteI } from '../model/vente-i';
import { Observable } from 'rxjs';

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

}

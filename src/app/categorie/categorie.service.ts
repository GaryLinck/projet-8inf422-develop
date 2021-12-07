import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class CategorieService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getCategories(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>('${this.apiServerUrl}/category/all');
    }

    public addCategorie(categorie: Categorie): Observable<Categorie> {
        return this.http.post<Categorie>('${this.apiServerUrl}/category/add', categorie);
    }

    /*
    public updateCategorie(categorie: Categorie): Observable<Categorie> {
        return this.http.put<Categorie>('${this.apiServerUrl}/category/update', categorie);
    }
    */

    public deleteCategorie(categorieId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/category//delete/${categorieId}');
    }
}
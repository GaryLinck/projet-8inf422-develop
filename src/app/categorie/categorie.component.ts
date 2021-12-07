import { Component, OnInit } from '@angular/core';
import { Categorie } from './categorie';
import { CategorieService } from './categorie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css', '../app.component.css']
})
export class CategorieComponent implements OnInit {

  public categories: Categorie[] | undefined;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(): void {
    this.categorieService.getCategories().subscribe(
      (response: Categorie[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}

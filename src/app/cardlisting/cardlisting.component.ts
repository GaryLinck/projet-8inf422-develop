import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cardlisting',
  templateUrl: './cardlisting.component.html',
  styleUrls: ['./cardlisting.component.css', '../app.component.css']
})
export class CardlistingComponent implements OnInit {

  categorie_name: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.categorie_name = ""!;
  }

  ngOnInit(): void {
    this.categorie_name = this.route.snapshot.paramMap.get('categorie')!

  }

}

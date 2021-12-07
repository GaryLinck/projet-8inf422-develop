import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../app.component.css']
})
export class CardComponent implements OnInit {

  categorie_name: string;
  card_id: number;
  card_name: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.categorie_name = ""!;
    this.card_name = ""!;
    this.card_id = 0;
  }

  ngOnInit(): void {
    this.categorie_name = this.route.snapshot.paramMap.get('categorie')!;
    this.card_name = this.route.snapshot.paramMap.get('name')!;

    //get id from params
    let id = this.card_name.split("-");
    this.card_id = parseInt(id[id.length-1]);
  }

}

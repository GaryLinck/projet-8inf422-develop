import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-order-method',
  templateUrl: './get-order-method.component.html',
  styleUrls: ['./get-order-method.component.css','../app.component.css']
})
export class GetOrderMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    //Changement du mode de réception de la commande
    document.getElementById("choix_ceuillette")!.addEventListener("click", function(){
      document.getElementById("choix_ceuillette")!.classList.add('active');
      document.getElementById("choix_livraison")!.classList.remove('active');

      document.getElementById("form_ceuillette")!.style.display = "block";
      document.getElementById("form_livraison")!.style.display = "none";
    });

    document.getElementById("choix_livraison")!.addEventListener("click", function(){
      document.getElementById("choix_ceuillette")!.classList.remove('active');
      document.getElementById("choix_livraison")!.classList.add('active');

      document.getElementById("form_ceuillette")!.style.display = "none";
      document.getElementById("form_livraison")!.style.display = "block";
    });

  }

}


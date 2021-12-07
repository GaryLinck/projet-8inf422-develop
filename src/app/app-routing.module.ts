import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from "./contact/contact.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {CardlistingComponent} from "./cardlisting/cardlisting.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {MoncompteComponent} from "./moncompte/moncompte.component";
import {CartComponent} from "./cart/cart.component";
import {CardComponent} from "./card/card.component";
import {GetOrderMethodComponent} from "./get-order-method/get-order-method.component";
import {PaymentComponent} from "./payment/payment.component";
import {AddcategorieComponent} from "./admin/addcategorie/addcategorie.component";
import {OrderlistComponent} from "./admin/orderlist/orderlist.component";
import {OrderdetailComponent} from "./admin/orderdetail/orderdetail.component";
import {ProductlistComponent} from "./admin/productlist/productlist.component";
import {CategorielistComponent} from "./admin/categorielist/categorielist.component";
import {AddproductComponent} from "./admin/addproduct/addproduct.component";
import {EditproductComponent} from "./admin/editproduct/editproduct.component";
import {EditcategorieComponent} from "./admin/editcategorie/editcategorie.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'contacteznous', component: ContactComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'cartes', component: CategorieComponent},
  { path: 'cartes/:categorie', component: CardlistingComponent},
  { path: 'connexion', component: LoginComponent},
  { path: 'inscription', component: SignupComponent},
  { path: 'moncompte', component: MoncompteComponent},
  { path: 'panier', component: CartComponent},
  { path: 'paiement', component: PaymentComponent},
  { path: 'detail-commande', component: GetOrderMethodComponent},
  { path: 'cartes/:categorie/:name', component: CardComponent},
  { path: 'admin', component: AdminHomeComponent},
  { path: 'admin/orderlist', component: OrderlistComponent},
  { path: 'admin/orderdetail/:id', component: OrderdetailComponent},
  { path: 'admin/productlist', component: ProductlistComponent},
  { path: 'admin/categorielist', component: CategorielistComponent},
  { path: 'admin/addproduct', component: AddproductComponent},
  { path: 'admin/editproduct/:id', component: EditproductComponent},
  { path: 'admin/addcategorie', component: AddcategorieComponent},
  { path: 'admin/editcategorie/:id', component: EditcategorieComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
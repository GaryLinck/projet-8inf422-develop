import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CardlistingComponent } from './cardlisting/cardlisting.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { GetOrderMethodComponent } from './get-order-method/get-order-method.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { OrderdetailComponent } from './admin/orderdetail/orderdetail.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { CategorielistComponent } from './admin/categorielist/categorielist.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { AddcategorieComponent } from './admin/addcategorie/addcategorie.component';
import { EditcategorieComponent } from './admin/editcategorie/editcategorie.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategorieService } from './categorie/categorie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CategorieComponent,
    CardlistingComponent,
    MoncompteComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CardComponent,
    GetOrderMethodComponent,
    PaymentComponent,
    OrderlistComponent,
    OrderdetailComponent,
    ProductlistComponent,
    CategorielistComponent,
    AddproductComponent,
    EditproductComponent,
    AddcategorieComponent,
    EditcategorieComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { Contact1Component } from './components/contact1/contact1.component';
import { Contact2Component } from './components/contact2/contact2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { Demo15Component } from './demo15.component';
import { ProductDetailsAPIComponent } from './components/productdetailsapi/productdetailsapi.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';

const routes: Routes = [
  { path: '', component: Demo15Component },
  { path: 'index', component: Demo15Component },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'news', component: NewsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productdetails', component: ProductDetailsComponent },
  { path: 'product-details-api', component: ProductDetailsAPIComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'contact', component: ContactComponent, children: [
      { path: '', component: Contact1Component },
      { path: 'contact1', component: Contact1Component },
      { path: 'contact2', component: Contact2Component }
    ]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

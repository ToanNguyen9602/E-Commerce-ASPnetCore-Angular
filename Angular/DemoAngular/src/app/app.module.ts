import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1.component';
import { Demo2Component } from './demo2.component';
import { Demo3Component } from './demo3.component';
import { Demo4Component } from './demo4.component';
import { Demo5Component } from './demo5.component';
import { Demo6Component } from './demo6.component';
import { Demo7Component } from './demo7.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo8Component } from './demo8.component';
import { DemoService } from './services/demo.service';
import { CalculateService } from './services/calculate.service';
import { RectangleService } from './services/rectangle.service';
import { CategoryService } from './services/category.service';
import { Demo9Component } from './demo9.component';
import { Demo10Component } from './demo10.component';
import { CertService } from './services/cert.service';
import { RoleService } from './services/role.service';
import { Demo11Component } from './demo11.component';
import { Demo12Component } from './demo12.component';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { Demo13Component } from './demo13.component';
import { Demo14Component } from './demo14.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { Contact1Component } from './components/contact1/contact1.component';
import { Contact2Component } from './components/contact2/contact2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { ProductAPIService } from './services/productapi.service';
import { BaseUrlService } from './services/baseurl.service';
import { Demo15Component } from './demo15.component';
import { Demo16Component } from './demo16.component';
import { ProductDetailsAPIComponent } from './components/productdetailsapi/productdetailsapi.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';
import { CategoryAPIService } from './services/categoryapi.service';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    HomeComponent,
    AboutusComponent,
    NewsComponent,
    ProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    WelcomeComponent,
    ContactComponent,
    Contact1Component,
    Contact2Component,
    ProfileComponent,
    Demo15Component,
    Demo16Component,
    ProductDetailsAPIComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    EditorModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    FileUploadModule,
    HttpClientModule
  ], 
  providers: [
    DemoService,
    CalculateService,
    RectangleService,
    CategoryService,
    CertService,
    RoleService,
    MessageService,
    ConfirmationService,
    ProductService,
    ProfileService,
    ProductAPIService,
    BaseUrlService,
    CategoryAPIService
  ],
  bootstrap: [Demo16Component]
})
export class AppModule { }

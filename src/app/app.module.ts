import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './elements/carousel/carousel.component';
import { FeaturettesComponent } from './elements/featurettes/featurettes.component';
import { SearchBarComponent } from './elements/search-bar/search-bar.component';
import { FullPictureHeadingComponent } from './elements/full-picture-heading/full-picture-heading.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    FeaturettesComponent,
    SearchBarComponent,
    FullPictureHeadingComponent,
    LoginComponent,
    CartComponent,
    EditProductsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

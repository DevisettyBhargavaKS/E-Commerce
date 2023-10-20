import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { AsignupService } from './services/asignup.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [StorageService, AuthService, AsignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}

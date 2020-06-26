import { AppRoutingModule } from './app.routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { HomeComponent } from './Componets/Home/Home.component';
import { LoginOrRegisterComponent } from './Componets/loginOrRegister/loginOrRegister.component';
import { LoginPageComponent } from './Componets/loginOrRegister/loginPage/loginPage.component';
import { RegisterPageComponent } from './Componets/loginOrRegister/registerPage/registerPage.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterFormService } from './services/register/registerForm.service';
import { LoginService } from './services/login/loginService.service';
import { NavBarComponent } from './Componets/Home/NavBar/NavBar.component';
import { CommentComponent } from './Componets/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginOrRegisterComponent,
    HomeComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavBarComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [RegisterFormService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

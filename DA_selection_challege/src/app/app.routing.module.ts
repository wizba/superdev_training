import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Componets/Home/Home.component';
import { LoginOrRegisterComponent } from './Componets/loginOrRegister/loginOrRegister.component';
import { CommentComponent } from './Componets/comment/comment.component';
const routes: Routes = [
  { path: 'home', component:HomeComponent  },
  { path: 'loginReg', component: LoginOrRegisterComponent },
  { path: 'comment/:id', component: CommentComponent },
  { path: '',   redirectTo: '/loginReg', pathMatch: 'full' },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
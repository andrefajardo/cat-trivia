import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SemAcessoComponent } from './components/sem-acesso/sem-acesso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoGuard } from './shared/guard/acesso.guard';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AcessoGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'sem-acesso',
    component: SemAcessoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

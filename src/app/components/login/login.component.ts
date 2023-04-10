import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormModel: { nome: string; senha: string; confirmaSenha: string; } = {
    nome: '',
    senha: '',
    confirmaSenha: ''
  }

  constructor() {}


  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.loginFormModel = {
      nome: '',
      senha: '',
      confirmaSenha: ''
    }
  }

  onSumit() {
    console.log('loginFormModel: ', this.loginFormModel);
  }
}

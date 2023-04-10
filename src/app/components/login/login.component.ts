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
    if (this.loginFormModel.senha != this.loginFormModel.confirmaSenha) {
      window.alert("Senha não confere!")
    }
    else {
      window.alert("Ok !!!")
    }
    console.log('loginFormModel: ', this.loginFormModel);
  }
}

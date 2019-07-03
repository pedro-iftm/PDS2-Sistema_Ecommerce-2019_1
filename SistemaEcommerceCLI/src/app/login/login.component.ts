import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: LoginServiceService) { }


  onSignin() {
    this.authService.signIn(this.formLogin.value);
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['', Validators.required]
    })
}

}

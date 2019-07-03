import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './clientes/cliente';

@Injectable()
export class LoginServiceService {
  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authenticated = false;
  constructor(private router: Router) { }
  signIn(cliente: Cliente) {
    if ((cliente.cpf === '##???##')) {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['home']);
    } else {
      this.authenticated = false;
    }
  }
  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }
}
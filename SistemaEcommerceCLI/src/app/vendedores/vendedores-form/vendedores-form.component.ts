import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { VendedoresService } from '../vendedores.service';
import { Vendedor } from '../vendedores';


@Component({
  selector: 'app-vendedores-form',
  templateUrl: './vendedores-form.component.html',
  styleUrls: ['./vendedores-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  private vendedorIndex: number;
  private isNew: boolean = true;
  private vendedor: Vendedor;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vendedorService: VendedoresService) { 
              }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.vendedorIndex = params['id'];
          this.vendedorService.get(this.vendedorIndex)
          .subscribe(data => this.vendedor = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.vendedor = new Vendedor();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/vendedores']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.vendedorService.add(this.vendedor);
    } else {
      result = this.vendedorService.update(this.vendedor);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
    });
  }

  excluir() {
    if (this.vendedor.codigo == null) {
      alert('Selecione algum vendedor');
    } else {
      if (confirm('Você realmente quer excluir o vendedor '+this.vendedor.nome+'?')) {
        this.vendedorService.remove(this.vendedor.codigo)
        .subscribe(
          data => alert('Vendedor removido '+data),
          err => {
            alert('Vendedor não removido');
          });
          this.novo();
          this.voltar();
      }
    }
  }

}

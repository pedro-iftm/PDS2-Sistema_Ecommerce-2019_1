import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../vendedores';
import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-vendedores-list',
  templateUrl: './vendedores-list.component.html',
  styleUrls: ['./vendedores-list.component.css']
})
export class VendedorListComponent implements OnInit {

  constructor(private vendedorService: VendedoresService) { }

  vendedores: Vendedor[] = [];

  ngOnInit() {
    this.vendedorService.getAll()
      .subscribe(data => this.vendedores = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.vendedorService.vendedoresChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.vendedores = data
      )
    );
  }

}

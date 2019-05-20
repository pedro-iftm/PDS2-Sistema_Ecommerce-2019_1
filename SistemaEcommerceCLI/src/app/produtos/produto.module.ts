import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { produtosRouting } from './produto.routing';
import { ProdutosService } from './produto.service';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,produtosRouting,FormsModule
  ],
  declarations: [ProdutoListComponent, ProdutoFormComponent, ProdutoCrudComponent,
    FilterPipe],
  providers: [ProdutosService]
})
export class ProdutosModule { }

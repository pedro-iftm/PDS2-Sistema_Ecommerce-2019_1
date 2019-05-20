import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorListComponent } from './vendedores-list/vendedores-list.component';
import { VendedoresRouting } from './vendedores.routing';
import { VendedoresService } from './vendedores.service';
import { VendedorFormComponent } from './vendedores-form/vendedores-form.component';
import { FormsModule } from '@angular/forms';
import { VendedorCrudComponent } from './vendedores-crud/vendedores-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,VendedoresRouting,FormsModule
  ],
  declarations: [VendedorListComponent, VendedorFormComponent, VendedorCrudComponent,
    FilterPipe],
  providers: [VendedoresService]
})
export class VendedoresModule { }

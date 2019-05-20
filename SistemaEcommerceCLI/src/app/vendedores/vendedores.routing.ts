import { Routes, RouterModule } from "@angular/router";
import { VendedorListComponent } from "./vendedores-list/vendedores-list.component";
import { VendedorFormComponent } from "./vendedores-form/vendedores-form.component";
import { VendedorCrudComponent } from "./vendedores-crud/vendedores-crud.component";


const VENDEDORES_ROUTES: Routes = [
    {
        path: '',
        component:  VendedorCrudComponent
    },
    {
        path: ':id',
        component:  VendedorCrudComponent
    }

];
export const VendedoresRouting = RouterModule.forChild(VENDEDORES_ROUTES);
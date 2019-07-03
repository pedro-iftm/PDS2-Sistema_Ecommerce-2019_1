import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule'
    },
    { 
        path: 'vendedores',
        loadChildren: 'app/vendedores/vendedores.module#VendedoresModule'
    },
    { 
        path: 'produtos',
        loadChildren: 'app/produtos/produto.module#ProdutosModule'
    },
    {
      path: 'signin',
      component: LoginComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(a => a.AdminModule),
  },
  {
    path:'payment',
    loadChildren:()=> import('./payment/payment.module').then(p => p.PaymentModule),
    data : {
      preload : true,
      delay : 4000
    }
  },
  {
    path:'products',
    loadChildren:()=> import('./products/products.module').then(c => c.ProductsModule),
    data : {
      preload : true,
      delay : 3000
    }
  },
  {
    path:'**',
    redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: CustomPreloadingStrategyService})], /* ,{preloadingStrategy: NoPreloading} */

  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(a => a.AdminModule),
    data : {
      preload : true,
      delay : 6000
    }
  },
  {
    path:'payment',
    loadChildren:()=> import('./payment/payment.module').then(p => p.PaymentModule),
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

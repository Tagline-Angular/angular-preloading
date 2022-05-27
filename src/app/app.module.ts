import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { FeatureModule } from './feature/feature.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FeatureModule,
  ],
  providers: [CustomPreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

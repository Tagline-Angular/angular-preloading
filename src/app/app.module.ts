import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { LoginComponent } from './login/login.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FeatureModule
  ],
  providers: [CustomPreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

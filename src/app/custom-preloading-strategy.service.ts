import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';
import { flatMap } from 'rxjs';
import { timer } from 'rxjs';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']) {
      var delay:number = route.data['delay'];
      console.log('\n +++++++++++ Preloading '+ route.path + '-module after ' + delay/1000 + ' seconds +++++++++++ \n ');

      return timer(delay).pipe(
        mergeMap(_ =>{
          console.log("\n ============= " + route.path + "-module preloaded. =============\n " )
          return loadMe();
        })
      )

    }else{
      console.log("\n ************ No preloading defined for " + route.path +" module *************\n ")
      return of(null);
    }
  }
}

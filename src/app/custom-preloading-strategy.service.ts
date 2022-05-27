import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';
import { flatMap } from 'rxjs';
import { timer } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']) {
      var delay:number = route.data['delay'];
      console.warn('Preloading '+ route.path + '-module after ' + delay/1000 + ' seconds');

      return timer(delay).pipe(
        flatMap(_ =>{
          console.warn(route.path + "-module preloaded." )
          return loadMe();
        })
      )

    }else{
      console.error("No preloading defined for " + route.path +" module")
      return of(null);
    }
  }
}

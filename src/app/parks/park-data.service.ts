import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Park} from './park';
import { Observable , from, of, interval} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParkDataService {
    parks?:Park[];
 // pokemons:any[]=[];
  constructor(private http:HttpClient) {
    this.getParks().subscribe(data=>this.parks=data); // preload park data
  }
  getSubsription():Observable<number> {
    return interval(1000); // just for fun
  }
  getParks():Observable <Park[]> {
    if (this.parks) {
      return of(this.parks);
    } else {
      return this.http.get <Park[]>('assets/data/data.json'); //抓資量
    }
  }
  getPark(index:number):Observable <Park>{
    if(this.parks) return of(this.parks[index]); // make it as obervable <Park>
    return of() ; // return empty
  }
  getParks2():Promise <Park[]>{
   if (this.parks) {
     return Promise.resolve(this.parks);
   }else {
     return this.http.get <Park[]>('assets/data/data.json').toPromise();
   }
// return this.http.get('assets/data/data.json()').toPromise() as Promise <Park[]>
  }
}



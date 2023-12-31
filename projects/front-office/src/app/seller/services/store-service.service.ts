import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PromotionCode } from 'Models/PromotionCode';
import { Store } from 'Models/Store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {


  constructor(private http:HttpClient) { }

  url="http://localhost:8081/store/";

  getStoresByUser(id:number):Observable<Store[]>{
    const options = { withCredentials: true };

    return this.http.get<Store[]>(this.url+"getStoresByUser?id="+id,options)
  }
  saveStore(Store:Store):Observable<Store>{
    const options = { withCredentials: true };

    return this.http.post<Store>(this.url+"SaveStore",Store,options)
  }
  addPormotionCode(promo:PromotionCode,prodId:number):Observable<Blob>{
    const options = { withCredentials: true };

    return this.http.post<Blob>("http://localhost:8081/PromotionCode/savePromotionCode?id="+prodId,promo,options)
  }

}

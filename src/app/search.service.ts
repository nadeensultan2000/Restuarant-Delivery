import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
apiurl='https://localhost:44329/api/';

  constructor(private http:HttpClient) { }
  getRestaurants(){
    return this.http.get(`${this.apiurl}Restaurant`)
  }
  getRestaurantsByCity(city?:string,searchName?:string){
    let params =new HttpParams()
    if(city)
   {params=params.append("city",city)} 
    if(searchName)
      {
        params=params.append("SearchName",searchName)
      }
    
    return this.http.get("https://localhost:44329/api/Restaurant/bycity",{params:params})
  }
  getMenuById(id:any){
    return this.http.get(`${this.apiurl}Restaurant/${id}/menu`)
  }
  CreateNewOrder(Model: any) {
    return this.http.post(`${this.apiurl}Order`, Model);
  }
  LoginService(){

  }
  RegisterService(){
    
  }
}

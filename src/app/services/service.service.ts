import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API } from './apis.service';
import { Repo } from '../modals/Repo';
import { ApiResponse } from '../modals/response';





@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private _http: HttpClient)
     { }

   GetRepolist(page:number) {
    let todayDate = new Date() 
    const month = todayDate.getMonth();
    todayDate.setMonth(todayDate.getMonth() - 1);
    while (todayDate.getMonth() === month) {
      todayDate.setDate(todayDate.getDate() - 1);
    } 
    
    return this._http.get<ApiResponse<Repo>>(API.repoinfo(todayDate.toISOString(),page));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) {}
	get(url){
	return this.httpClient.get(url);
	}
    post(url,post){
      return this.httpClient.post<any>(url,post);
    }
}

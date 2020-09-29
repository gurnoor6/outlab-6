import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) {}
	get(url){
	return this.httpClient.get(url)
						  .pipe(retry(4));
	}
    post(url,post){
      return this.httpClient.post<any>(url,post);
    }
}

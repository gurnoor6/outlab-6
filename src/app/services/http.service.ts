import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) {}
	get(url){
  // It will only retry when the request fails
	return this.httpClient.get(url)
						  .pipe(retry(4));
	}
  post(url,data){
    // It will only retry when the request fails
    return this.httpClient.post(url,data)
    						.pipe(retry(4));
  }
}

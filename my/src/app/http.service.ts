import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

// ** EXAMPLE OF SERVICE USING HTTP TO INTERACT WITH API **

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // ** DEPENDENCY INJECTION **
  constructor(private http: HttpClient) { }

  // ** USING ANGULAR HTTP CLIENT TO FETCH DATA FROM A PUBLIC API **
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}

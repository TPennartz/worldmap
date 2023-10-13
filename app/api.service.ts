import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://api.worldbank.org/v2';

  constructor(private http: HttpClient) {}

 
  getCountryInfoByName(countryName: string): Observable<any> {
    const url = `${this.baseUrl}/country/${countryName}?format=json`;
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(value: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(`${environment.api_url}/r/${value}/top.json`, { headers: headers});

  }
}

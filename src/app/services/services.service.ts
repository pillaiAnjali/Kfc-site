import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getAllMenu(){
   return this.http.get('https://my-json-server.typicode.com/pillaiAnjali/kfc-server/db')
  }
}

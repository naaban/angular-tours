import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : any = "http://localhost:9000/"
  constructor(public httpClient : HttpClient) { 

  }

  addCreatePackage(body){
    let headers = new  HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
    return new Promise ((resolve)=>{
      this.httpClient.post(this.url + "angular-travel/create-package",body,{headers : headers}).subscribe(res=>{
        resolve(res)
      },
      err=>{
        resolve(err)
      })
    })
  }

  getTheme(){
    let headers = new  HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
    return new Promise ( (resolve) => {
      this.httpClient.get(this.url + "angular-travel/update-theme" ,{headers : headers}).subscribe(res=>{
        resolve(res)
      },err=>{
        resolve(err)
      })
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  usernameExists(username:string){
    console.log('user-service:',username);
    let head={
  header:new HttpHeaders({
    'content-type':'application/json'
  })
};
return this.http.getMethod(`https://localhost:7089/api/User/UsernameExists?username=${username}`,false,head);
  }

  register(model:any){
    let head={
      header:new HttpHeaders({
        'content-type':'application/json'
      })
    };
    return this.http.postMethod('https://localhost:7089/api/User/Register',model,true,head);
  }

  login(data: any) {
    let head={
      header:new HttpHeaders({
        'content-type':'application/json'
      })
    };
  return this.http.postMethod('https://localhost:7089/api/User/Login', data,false,Headers);
}
}

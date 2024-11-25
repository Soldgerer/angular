import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private URL_API:string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient)
  { 



  }

  private header = new HttpHeaders()
    .set('Content-Type', 'application/json ; charset=utf-8')
    //.set('X-API-KEY','UWUWUWUWUWUWUWUWUWUWUWUWUWUWU')
    .set('Accept', 'application/json');

  
  private options = {
    headers: this.header
  }

  public getUsers(endPoint:string):any{

    return this.http.get(this.URL_API + endPoint, this.options);
  }
}

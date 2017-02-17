import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = 'e98b828ff6f7a8e9e1bd';
  private client_secret = 'b4d61bdbdac225060ac77334799b0c428140ad07';
  constructor(private _http: Http) { 
    console.log('Github Service Ready...')
    this.username = 'codedevstem';
    
  }
  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
    getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
  updateUser(username:string) {
    this.username = username;
  }

}

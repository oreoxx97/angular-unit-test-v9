import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getGithubUserDetail(): Promise<any> {

    return this.http.get('https://api.github.com/users/oreoxx97').toPromise()
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Member } from '../../models/member';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MembersService {

  constructor(private http: Http) { }

  getMembers():Observable<any>{
    return this.http.get(environment.apiUrl + "api/members").pipe(
      map(res => res.json())
    )
      
  }

}

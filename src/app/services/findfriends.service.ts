import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class FindFriendsService {
    constructor(private http:Http) {}

    token ='Bearer'+ ' '+ sessionStorage.getItem('token');
    
    getAllUsers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get('http://localhost:3000/findfriends/users', options)
        .map((res => {
            let friends = res.json();
            return friends;
        }))
    }
}
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class FindFriendsService {
    constructor(private http:Http) {}

    token ='Bearer'+ ' '+ localStorage.getItem('token');
    user = localStorage.getItem('user');
    viewFriendDetails: any;
    getAllUsers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('http://localhost:3000/findfriends/users', this.user, options)
        .map((res => {
            let friends = res.json();
            return friends;
        }))
    }

    handleError(error: Response) {
        return Observable.throw(error);
    }
    viewFriend(id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/findfriends/viewUser', id, options)
        .map((res => {
            this.viewFriendDetails = res.json();
            return this.viewFriendDetails;
        }))
        .catch(this.handleError);
    }
}
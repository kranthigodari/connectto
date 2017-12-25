import { User } from './sign-up/user.model';
import { Http, Response, Headers, RequestOptions, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    constructor(private http: Http, private route: ActivatedRoute, private router: Router) {}

    loginUser(user) {
        return this.http.post('http://localhost:3000/user/login',user)
        .map( res => {
            this.router.navigate(['']);
            sessionStorage.setItem('token',res.json().id_token);
            sessionStorage.setItem('username',res.json().user.cnt_username);
        })
        .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error);
    }

    logOut() {
        this.router.navigate(['login']);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        this.token = null;
    }

    isAuthenticated() {
        this.token = sessionStorage.getItem('token');
        return this.token != null;
    }

    signupUser(user) {
        return this.http.post('http://localhost:3000/user/signup', user)
        .map(
            res => {
                console.log(res);
            })
            .catch(this.handleError);
    }
}
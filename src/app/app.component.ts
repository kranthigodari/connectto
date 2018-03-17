import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthService } from './auth/auth.service';
// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: string;
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
                // this.token = sessionStorage.getItem('token');
  }
  title = 'app';
  session: string;
  ngOnInit() {

    // firebase.initializeApp({
    //   apiKey: "AIzaSyCC-Y_Hmeqizvp71xRD8Eg3oMaP0fXfky0",
    //   authDomain: "connectt-webapp.firebaseapp.com",
    //   databaseURL: "https://connectt-webapp.firebaseio.com",
    //   projectId: "connectt-webapp",
    //   storageBucket: "connectt-webapp.appspot.com",
    //   messagingSenderId: "910108592882"
    // });
    
    this.session = localStorage.getItem('token');
    if(!this.session) {
      this.router.navigate(['login']);
    }   
  }
}

import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthService } from './auth/auth.service';
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
    this.session = sessionStorage.getItem('token');
    if(!this.session) {
      this.router.navigate(['login']);
    }
  }
}

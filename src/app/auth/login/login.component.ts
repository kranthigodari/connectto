import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginstatus = false;
  successMsg : string;
  statusMsg : string;
  constructor(private authService: AuthService, private http: Http,
  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let email = "";
    let password = "";
    
    this.loginForm = new FormGroup({
      'email' : new FormControl(email, Validators.email),
      'password' : new FormControl(password, Validators.required),
    });
  }

  onLogin() {
    var user: any;
    user = {
      'email' : this.loginForm.value.email,
      'password' : Md5.hashStr(this.loginForm.value.password)
    }
    this.authService.loginUser(user)
    .subscribe( 
      (res) => {
      this.statusMsg = "Login Successfull";
      },
      (error) => {
        this.statusMsg = "Please make sure email and password are correct";
      });
  }
  
}

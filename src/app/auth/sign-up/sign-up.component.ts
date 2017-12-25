import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import { FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  postStatus: any;
  statusMsg: string;
  constructor(private fb: FormBuilder, private http : Http,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router ) {}
  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let fname = "";
    let lname = "";
    let email = "";
    let password = "";
    let mobile = "";
    let gender = "";
    this.signupForm = new FormGroup({
      'fname' : new FormControl(fname, Validators.required),
      'lname' : new FormControl(lname, Validators.required),
      'email' : new FormControl(email, Validators.email),
      'password' : new FormControl(password, Validators.required),
      'mobile' : new FormControl(mobile, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
      'gender' : new FormControl(gender, Validators.required),
    });
  }

  onSignup() {
    this.authService.signupUser(this.signupForm.value)
    .subscribe(
      (res) => {
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      (error)=> {
        this.statusMsg = "Email Id is already in Use";
      }
    )
  }

    
  OnCancel() {
    this.router.navigate(['/login']);
  }
  
}
  
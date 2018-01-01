import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit {

  deactivateForm: FormGroup;
  token ='Bearer'+ ' '+ sessionStorage.getItem('token');
  deactivateMsg: string;
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let email = "";
    let password = "";
    
    this.deactivateForm = new FormGroup({
      'email' : new FormControl(email, Validators.email),
      'password' : new FormControl(password, Validators.required),
    });
  }

  onDeactivate() {
    var user: any;
    user = {
      'email' : this.deactivateForm.value.email,
      'password' : Md5.hashStr(this.deactivateForm.value.password
    )}
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);

    let options = new RequestOptions({ headers: headers });
    
    this.http.post('http://localhost:3000/deactivate/user', user, options )
    .subscribe(
        res => {
          this.deactivateMsg = "";
          this.router.navigate(['login']);
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('username');
        },
        err =>  this.logError(err)
    )
  }

  logError(err: any) {
    this.deactivateMsg = err.json().message;
  }
}

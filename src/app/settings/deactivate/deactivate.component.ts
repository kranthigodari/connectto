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
  token ='Bearer'+ ' '+ localStorage.getItem('token');
  deactivateMsg: any;
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
          this.deactivateMsg = "Your account hase been deactivated";
          this.router.navigate(['login']);
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('user');  
        },
        err =>  this.logError(err)
    )
  }

  logError(err: any) {
    this.deactivateMsg = err.json().message;
  }
}

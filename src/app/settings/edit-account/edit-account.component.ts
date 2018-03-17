import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  editForm: FormGroup;
  storedNames = JSON.parse(localStorage.getItem("user"));
  constructor() { }

  ngOnInit() {
    this.initForm();
    console.log(this.storedNames);
  }

  private initForm() {
    let uname = this.storedNames.cnt_username;
    let fname = this.storedNames.cnt_fname;
    let lname = this.storedNames.cnt_lname;
    let email = this.storedNames.cnt_email;
    let mobile = this.storedNames.cnt_mobile;
    this.editForm = new FormGroup({
      'uname' : new FormControl(uname, Validators.required),
      'fname' : new FormControl(fname, Validators.required),
      'lname' : new FormControl(lname, Validators.required),
      'email' : new FormControl(email, Validators.email),
      'mobile' : new FormControl(mobile, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
    });
  }

  selectPic() {
  }

  
}

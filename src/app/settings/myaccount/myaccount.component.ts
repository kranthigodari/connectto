import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  userName = localStorage.getItem('username');
  storedNames = JSON.parse(localStorage.getItem("user"));
  constructor(private authService: AuthService) {
   }

  
  ngOnInit() {
    console.log(this.storedNames);
  }

}

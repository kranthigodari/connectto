import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FindFriendsService } from '../../services/findfriends.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  profileUser: any;
  constructor(private friendService:  FindFriendsService,
  private route: ActivatedRoute,
private router: Router) { }

  ngOnInit() {
    this.router.navigate(['timeline'], {relativeTo: this.route});
  }

  viewProfile() {
    // console.log(this.friendService.viewFriendDetails);
    this.profileUser = this.friendService.viewFriendDetails;
    // console.log(this.profileUser[0].cnt_email);
  }

  about() {
    this.router.navigate(['about'], {relativeTo: this.route});
  }
  friends() {
    this.router.navigate(['friends'], {relativeTo: this.route});
  }
  photos() {
    this.router.navigate(['photos'], {relativeTo: this.route});
  }
  timeline() {
    this.router.navigate(['timeline'], {relativeTo: this.route});
    
  }
  

}

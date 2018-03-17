import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FindFriendsService } from '../services/findfriends.service';
import { ViewUserComponent } from '../user/view-user/view-user.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  friends: any;
  constructor(private authService: AuthService,
     private route: ActivatedRoute,
      private router: Router,
    private findFriendsService: FindFriendsService,
  private viewprofileComponent: ViewUserComponent) { }

  ngOnInit() {
    this.findFriends();
  }

  onLogout() {
    this.authService.logOut();
  } 

  settingsPage() {
    this.router.navigate(['settings'], {relativeTo: this.route});
  }

  messagePopbox() {
    
  }
  
  findFriends() {
    this.findFriendsService.getAllUsers()
    .subscribe(
      (res) => {
        this.friends = res;
        // debugger;
      },
      (err) => console.log(err)
    )
  }

  viewUser(id) {
    var user: any;
    user = {
      'id' : id
    }
    this.findFriendsService.viewFriend(user)
    .subscribe(
      (res) => {
      this.router.navigate(['viewProfile'], {relativeTo: this.route});
      this.viewprofileComponent.viewProfile();
      }
    );
  }
}

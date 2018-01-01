import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-settings-dashboard',
  templateUrl: './settings-dashboard.component.html',
  styleUrls: ['./settings-dashboard.component.css']
})
export class SettingsDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  Deactivate() {
    this.router.navigate(['deactivate'], {relativeTo: this.route})
  }
}

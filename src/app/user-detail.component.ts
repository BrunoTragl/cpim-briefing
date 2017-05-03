import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../providers/UserService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: []
})
export class UserDetailComponent implements OnInit {
    user: any;
    constructor (private route: ActivatedRoute,
                 private userService: UserService,
                 private location: Location) { }
    ngOnInit(): void {
       this.user = this.userService.getSelectedUser();
       console.log(this.user);
    }
    goBack(): void {
       this.location.back();
    }
}
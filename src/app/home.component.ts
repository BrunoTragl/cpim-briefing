import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../providers/UserService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  title = 'Home';
  page = 1;
  users: any[];
  selectedUser;
  constructor (private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    Promise.resolve(this.userService.getData('10', '1', 'abc'))
    .then(res => this.users = res)
    .catch(error => console.log(error));
  }
  onPageChange(page: string): void {
    Promise.resolve(this.userService.getData('10', page, 'abc'))
    .then(res => this.users = res)
    .catch(error => console.log(error));
  }
  goToDetails(user: any): void {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/user-detail']);
  }

}
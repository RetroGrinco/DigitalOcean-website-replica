import { Component, OnInit } from '@angular/core';
import { User, UserServiceService } from './user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  users: User[] = []
  trackUser(index: number, user: User): string {
    return user.email
  }

  constructor(private userService: UserServiceService) {

  }

  ngOnInit(): void {
    this.users = this.userService.getUser()
  }
  
}

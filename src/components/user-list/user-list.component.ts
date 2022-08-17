import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../domain/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  displayName: string = '';

  // get the displayName passed by NavbarComponent as a state property
  constructor(private _router: Router, private _userService: UserService) {
    this.displayName =
      this._router.getCurrentNavigation()?.extras.state?.['displayName'];

  }

  // when app navigates to this route(compomnent) 
  // we connect with stack exchange api and 
  // get list of users based on the displayName 
  ngOnInit(): void {
    console.log(this.displayName);
    this.getResults();
  }

  // since getUserByDisplayName is asynchronous we need to await for outcome 
  async getResults() {
    this.users = await this._userService.getUsersByDisplayName(
      this.displayName
    );
    console.log(this.users);
  }

  // when an user name is clicked re-route to user-details page/component
  getDetails(user: IUser) {
    this._router.navigate(['/user-details'], { state: { user: user } });
  }
}

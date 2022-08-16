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

  sample: any = [];
  userListError = '';
  displayName: string = '';


  constructor(private _router: Router, private _userService: UserService) {
   
    this.displayName =
      this._router.getCurrentNavigation()?.extras.state?.['displayName'];

  }


  ngOnInit(): void {
    console.log(this.displayName);
    // it is fecthing the data but i couldnt figure out why it is not storing it in this.users
    // i was not waiting for an async function to stop. So, I created a new method and called it here.
    this.getResults();
  }

  async getResults() {
    this.users = await this._userService.getUsersByDisplayName(
      this.displayName
    );
    console.log(this.users);
  }

  getDetails(user: IUser) {
    this._router.navigate(['/user-details'], { state: { user: user } });
  }
}

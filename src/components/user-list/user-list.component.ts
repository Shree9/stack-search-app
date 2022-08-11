import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { IUser } from '../../domain/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  //   users = [
  //     {"user_id" : 1011 ,
  //       "display_name" : "shree",
  //       "location" : "hyderabad",
  //       "reputation" : 3400
  //     },
  //     {"user_id" : 1010 ,
  //       "display_name" : "tocho",
  //       "location" : "hyderabad",
  //       "reputation" : 53339
  //     },
  //     {"user_id" : 1014 ,
  //       "display_name" : "priscilla",
  //       "location" : "ohio",
  //       "reputation" : 47000
  //     }
  // ]
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
    this.getResults();
  }

  async getResults() {
    this.users = await this._userService.getUsersByDisplayName(
      this.displayName
    );
    console.log(this.users);
  }

  getDetails(user: any) {
    this._router.navigate(['/user-details'], { state: { user: user } });
  }
}

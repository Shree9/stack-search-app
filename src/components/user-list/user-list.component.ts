import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { IUser } from '../../domain/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  //  users : IUser[] = [] 

  users = [
    {"user_id" : 1011 , 
      "display_name" : "shree",
      "location" : "hyderabad", 
      "reputation" : 3400
    },
    {"user_id" : 1010 , 
      "display_name" : "tocho",
      "location" : "hyderabad", 
      "reputation" : 53339
    },
    {"user_id" : 1014 , 
      "display_name" : "priscilla",
      "location" : "ohio", 
      "reputation" : 47000
    }
]  
   sample : any = [] 
   userListError = ""
  displayName: string = "";
  
  constructor(private _router: Router, private _userService : UserService) { 
       this.displayName = this._router.getCurrentNavigation()?.extras.state?.['displayName'];
  }

  ngOnInit(): void {
      console.log(this.displayName)
      // this._userService.getUsers().then(users => this.users = users);
      // this._userService.getUsersByDisplayName(this.displayName).then(users => this.users = users);
  }

  getDetails(user : any) {
    this._router.navigate(['/user-details'], {state : {user : user}})  
  }

}



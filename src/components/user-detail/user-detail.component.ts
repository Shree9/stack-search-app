import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/domain/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  
})
export class UserDetailComponent implements OnInit {
  
  user : IUser;

  constructor(private _router : Router) {
     this.user = this._router.getCurrentNavigation()?.extras.state?.['user']; 
   }

  ngOnInit(): void {
    
  }

}

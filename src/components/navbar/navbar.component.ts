import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  displayName : string = '';
  constructor(private _router : Router) { }

  
  ngOnInit(): void {
  }

  
  onSubmit() {  
    console.log(this.displayName);
    //The router only destroys and recreates the component when it navigates to a different route.
    // When only route params or query params are updated but the route is the same, 
    // the component won't be destroyed and recreated.
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/users'], {state : {displayName : this.displayName}})  
  } 
}

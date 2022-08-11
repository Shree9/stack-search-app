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
    console.log( this.displayName);
    this._router.navigate(['/users'], {state : {displayName : this.displayName}})  
  } 
}

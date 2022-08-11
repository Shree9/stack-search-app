
import { Injectable } from '@angular/core';
import { IUser } from '../domain/user';
import axios from 'axios'; 


@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  users: IUser [] = [];

  constructor() { }

   getUsers()   {

      // I was thinking at first to get all users and then filter 
      // this might not be the best route to go 
      let url = 'https://api.stackexchange.com/2.3/users?site=stackoverflow'; 
    
       axios({
        method: 'get',
        url: url,
        responseType: 'json'
      }).then( (response) => {
        // console.log(response)
        const objects = response.data.items; 
        objects.map ( (object: any) => {
            // console.log("here in axios response")
            // console.log(object)
            const {user_id,display_name,location ,reputation} = object; 
            const user : IUser = {user_id,display_name,location ,reputation}
            this.users.concat(user)
            console.log(typeof(user))
        })
      });
      console.log(typeof(this.users)); 

      return this.users; 
  }

   getUsersByDisplayName (displayName: string)  {
    // improved -- utilizing default filters from stack exchange api 
      let url = 'https://api.stackexchange.com/2.3/users'
      let params = {
        order : "desc", 
        sort : "reputation", 
        inname : displayName, 
        site : "stackoverflow"
      } // as suggested by stack exchange api 

       axios({
        method: 'get',
        url: url,
        responseType: 'json', 
        params : params
      }).then( (response) => {
        // console.log(response)
        const objects = response.data.items; 
        objects.map ( (object: any) => {
            // console.log("here in axios response")
            // console.log(object)
            const {user_id,display_name,location ,reputation} = object; 
            const user : IUser = {user_id,display_name,location ,reputation}
            this.users.concat(user)
            // console.log(user)
        })
      });
      // console.log(typeof(this.users))
      return this.users;  
    
  }



  
}

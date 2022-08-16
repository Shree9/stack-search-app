import { Injectable } from '@angular/core';
import { IUser } from '../domain/user';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [];

  constructor() {}


  async getUsersByDisplayName(displayName: string) {
    // improved -- utilizing default filters from stack exchange api

    // url for stackexchange users
    let url = 'https://api.stackexchange.com/2.3/users';

    // Params as suggested by stack exchange api
    // in descending order of reputation
    let params = {
      order: 'desc',
      sort: 'reputation',
      inname: displayName,
      site: 'stackoverflow',
    };

    // asynchronously call the stackexchnage api
    // wait for the call to finish
    await axios({
      method: 'get',
      url: url,
      responseType: 'json',
      params: params,
    })
      .then((response) => {
        const user_objects = response.data.items;
        this.users = user_objects.map((object: any) => {
          let { user_id, display_name, location, reputation } = object;
          let user: IUser = { user_id, display_name, location, reputation };
          return user;
        });
      })
      .catch( (error) =>  {
        if (error.response) {
          // REQUEST IS SENT AND RESPONSE WAS RECEIVED (STATUS CODE 2xx)
          console.log("REQUEST IS SENT AND RESPONSE WAS RECEIVED (STATUS CODE 2xx)"); 
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // NO RESPONSE RECEIVED 
          console.log(" NO RESPONSE RECEIVED"); 
          console.log(error.request);
        } else {
          // REQUEST SET UP HAS SOME ISSUES 
          console.log("REQUEST SET UP HAS SOME ISSUES "); 
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    return this.users;
  }
}

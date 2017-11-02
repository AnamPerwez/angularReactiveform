import { Injectable } from '@angular/core';
import {User} from './app.model';

@Injectable()
export class UserService {
    variousUsers:User[];
setUser(user:User){
this.variousUsers.push(user);
console.log(this.variousUsers);
}

}
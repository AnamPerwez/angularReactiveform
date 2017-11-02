import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {User} from './app.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userForm:FormGroup;
  user:User;
  constructor(private _formbuilder:FormBuilder,private userService:UserService){
  
  }
 
  ngOnInit(){
  this.createForm();
  }
  // ^\d{1,2}\/\d{1,2}\/\d{4}$
  createForm(){
    this.userForm=this._formbuilder.group({
      name:['',Validators.required],
      date:[],
      salary:[,Validators.required],
      gender:[null,Validators.required],
      isMarried:[]
  
      })
  }
  onSubmit(){
    this.user.name=this.userForm.get('name').value;
    this.user.birthDate=this.userForm.get('date').value;
    this.user.salary=this.userForm.get('salary').value;
    this.user.gender=this.userForm.get['gender'].value;
    this.user.isMarried=this.userForm.get['isMarried'].value;
    //let usera:User={name:'a',birthDate:'c',salary:12000,gender:'c',isMarried:true};
  //  let user:User=this.userForm.value;
    console.log(this.userForm.value);
    this.userService.setUser(this.user);
    alert(JSON.stringify(this.userForm.value));
  }

  callReset(){
    this.userForm.reset();   //for resetting form
 
  }
}

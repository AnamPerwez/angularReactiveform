import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userForm:FormGroup;
  constructor(private _formbuilder:FormBuilder){

  }
 
  ngOnInit(){
  this.createForm();
  }
  createForm(){
    this.userForm=this._formbuilder.group({
      name:['',Validators.required],
      date:[,Validators.pattern('	^\d{1,2}\/\d{1,2}\/\d{4}$')],
      salary:[,Validators.required],
      gender:[null,Validators.required],
      isMarried:[]
  
      })
  }
  onSubmit(){
    console.log(this.userForm.value);
    alert(JSON.stringify(this.userForm.value));
  }
  callReset(){
    this.userForm.reset();   //for resetting form
 
  }
}

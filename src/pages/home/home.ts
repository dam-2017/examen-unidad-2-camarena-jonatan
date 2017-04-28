import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'; 
import { Welcome } from './../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name:any = "";
  public password:any = "";
  public pass:any = "";
  public value:any = false;

  public myForm:FormGroup;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
    });
    this.name = this.myForm.controls['name'];
    this.password = this.myForm.controls['password'];
  }
  sendData(){
    this.value = true;
    let data ={
          name: this.name.value,
          password: this.password.value,
    };
    this.navCtrl.push(Welcome,data);
    if(data.name == "joomcamarenao" && data.password == "12400248" ){
      this.pass = true;
    }else{
      this.value=false;
      this.pass = false;
    }
  }
}


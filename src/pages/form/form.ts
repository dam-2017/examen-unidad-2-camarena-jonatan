import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'; 


/**
 * Generated class for the Form page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class Form {
  public name:any = "";
  public lastname:any = "";
  public dob:any = "";
  public rfc:any = "";

  public myForm:FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      dob:['',Validators.required],
    });
    this.name = this.myForm.controls['name'];
    this.lastname = this.myForm.controls['lastname'];
    this.dob = this.myForm.controls['dob'];
  }
  sendData(){
    let data ={
          name: this.name.value,
          lastname: this.lastname.value,
          dob: this.dob.value,
    };
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Form');
  }

}

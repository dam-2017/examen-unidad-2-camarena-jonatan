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
  public lastnameP:any = "";
  public lastnameM:any = "";
  public dob:any = "";
  public rfc:any = "";

  public myForm:FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name:['',Validators.required],
      lastnameP:['',Validators.required],
      lastnameM:['',Validators.required],
      dob:['',Validators.required],
    });
    this.name = this.myForm.controls['name'];
    this.lastnameP = this.myForm.controls['lastnameP'];
    this.lastnameM = this.myForm.controls['lastnameM'];
    this.dob = this.myForm.controls['dob'];
  }
  sendData(){
    let data ={
          name: this.name.value,
          lastnameP: this.lastnameP.value,
          lastnameM: this.lastnameM.value,
          dob: this.dob.value,
    };

    console.log(data.lastnameP.substring(0,1));
    console.log(data.lastnameP.split());
    let vocal;
    let cad = data.lastnameP.split();
    for(let i = 0;  i<cad.length; i++ ){
        console.log(i);
      if(cad[i] == 'a' || cad[i] == 'e' || cad[i] == 'i' || cad[i] == 'o' || cad[i] == 'u' ){
        vocal = cad[i];
        console.log(vocal);
      }

    }
    console.log(data.lastnameM.substring(0,1));
    console.log(data.name.substring(0,1));
    console.log(data.dob.year);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Form');
  }

}

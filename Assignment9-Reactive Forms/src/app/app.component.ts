import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  signupForm: FormGroup;
  states: any= ['stable','critical','finished'];
  fordbiddenUsernames=['Test','gk'];

constructor(private formBuilder: FormBuilder){}
ngOnInit(){
  this.signupForm= new FormGroup({
    'username': new FormControl(null,[Validators.required ], this.forbiddenNames),
    'mail': new FormControl(null,[Validators.required,Validators.email]),
    'stateselect': new FormControl(null,[Validators.required])
  });
}
changeStates(e){
  this.signupForm.controls['stateselect'].setValue(e.target.value,{onlySelf:true});
}

onSubmit(){
  console.log(this.signupForm);
}

/* forbiddenNames(control: FormControl): {[s:string]: boolean }{
  if (this.fordbiddenUsernames.indexOf(control.value) !== -1){
    return {'nameIsForbidden': true};
  }
  return null; 
  
}*/


forbiddenNames(control: FormControl): Promise<any>| Observable<any> {
 const promise = new Promise<any>( (resolve, reject) => {
   setTimeout( () => {
     if (control.value === 'Test') 
     {
       resolve({'usernameisForbidden': true});
     }
     else{resolve(null)};
   }, 1500);
 });
 return promise;
}

}//end of export class
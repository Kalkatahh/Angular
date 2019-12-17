import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  option='advanced';


  onSubmit(elem: NgForm){
    console.log(elem);
  }
}

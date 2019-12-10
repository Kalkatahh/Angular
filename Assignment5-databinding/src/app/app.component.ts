import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   evenNumbers: number[]=[];
   oddNumbers :number[]=[];

  
  getNumber(event:number){


   if (event % 2 == 0){
     this.evenNumbers.push(event);
   }
   else{
     this.oddNumbers.push(event);
   }

  }


}

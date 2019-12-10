import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  interval;
  @Output() intervalFired= new EventEmitter<number>();  
  lastNum=0;
  
  constructor() { }

  ngOnInit() {
  }
  i=0;

 

  startClicked(){
    
    this.interval = setInterval(()=>  {
      this.intervalFired.emit(this.i); 
      this.i++; 
    },2000);
  }

  stopCount(){

      clearInterval(this.interval);
    
  }
}

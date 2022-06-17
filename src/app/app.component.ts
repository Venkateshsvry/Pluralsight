import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled:boolean=false;
  width:number=300;
  eventHandler():void{
    this.isDisabled=true;
    this.width=200;
    
  }

  
  title = 'Pluralsight';
}

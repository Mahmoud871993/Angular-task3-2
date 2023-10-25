import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent {

  PrintMessage(msg:string){
    console.log(`Hello world!!!!! ${msg}`)
  }

  PrintMessage2(x:any){
    console.log(x);
    x.innerHTML = "Changed text";
    console.log(this.MyElement)
    this.MyElement.nativeElement.innerHTML = " so far so good"
  }

  PrintMessage3(x:any){
    console.log(x.target);
    var element = x.target;
    element.innerHTML = "Clicked";


  }
  @ViewChild('mydiv') MyElement : any

}

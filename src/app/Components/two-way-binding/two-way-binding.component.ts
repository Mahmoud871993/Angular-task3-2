import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  inputtxt: string = '';

  inputname(event: any){
this.inputtxt = event.target.value;
//console.log(this.inputtxt);


  }
  images: string [] = ['assets/images/1.jpg.jpg',
  'assets/images/2.jpg',
  'assets/images/3.jpg'

]
counter : number = 0;
currentimage: string = this.images[this.counter]

next(){
  this.counter++
  if (this.counter >= this.images.length)
  this.counter = 0;
  this.currentimage = this.images[this.counter]
  
}
previous(){
  this.counter--;
  if(this.counter < 0)
  this.counter = 0;
  this.currentimage = this.images[this.counter]
}
 timeid: any;

start(){
  this.timeid = setInterval(() => {
    this.next(); // Call next 
  }, 500);
}

stop(){
  clearInterval(this.timeid)
}









formName: string = "";
formAddress: string = "";
formAge : number =0;

SaveData(){
  console.log(this.formName, this.formAddress, this.formAge);
  this.formAddress = this.formName = "";
  this.formAge = 0
}
}





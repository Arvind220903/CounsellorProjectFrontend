import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})

export class Ngclass {
    student:{
    name:String
    age:Number

  }={
    name:"",
    age:0
  }
  color:String="";
  ok(event:any){
    this.color=event.target.value;
  }
  
}

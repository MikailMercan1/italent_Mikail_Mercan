import { Component, OnInit } from '@angular/core';
import Draggable from "gsap/Draggable"; 
import { TimelineMax, TweenLite, Linear, Power1 } from "gsap/all";  

@Component({
  selector: 'app-x-factor',
  templateUrl: './x-factor.component.html',
  styleUrls: ['./x-factor.component.css']
})
export class XFactorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const draggable = Draggable.create("#outer-circle", {
      type: "rotation",
      inertia: true,
      snap: function(endValue) { 
        var position = endValue
        var counter = 0
        if(endValue >= 0){
          while(position > 360){
            position -= 360
            counter += 1
          }
          if(position >= 0 && position < 90){
            return 23 + (counter * 360)
          } else if(position >= 90 && position < 180){
            return 156 + (counter * 360)
          } else if(position >= 180 && position < 270){
            return 203 + (counter * 360)          
          } else{
            return 337 + (counter * 360)
          } 
        
        } else {
          while(position < -360){
            position += 360
            counter += 1
          }
          if(position <= 0 && position > -90){
            return -23 - (counter * 360)
          } else if(position <= -90 && position > -180){
            return -156 - (counter * 360)
          } else if(position <= -180 && position > -270){
            return -203 - (counter * 360)          
          } else{
            return -337 - (counter * 360)
          } 
        }
        
      
      }
    });
  }

}

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
      inertia: true
    });

  }

}

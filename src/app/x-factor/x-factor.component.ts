import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as jsonData from '../../assets/data-xfactor/xfactor.json';

@Component({
  selector: 'app-x-factor',
  templateUrl: './x-factor.component.html',
  styleUrls: ['./x-factor.component.css']
})
export class XFactorComponent implements OnInit {

  currentFeature: string;
  feature: string;

  products = (jsonData as any).default;
  counter = 0

  

  ngOnInit(): void {
    this.prepareWindow();
    
  }

  prepareWindow(){
    document.getElementById("containDiv").addEventListener("click", (e:Event) => this.changeContent());
  }
  
  changeContent(){
    document.getElementById("infoText").style.visibility = "hidden"
    document.getElementById("text").innerHTML = this.products[this.counter].text;
    document.getElementById("chosenItem").innerHTML = this.products[this.counter].name;
    console.log(this.counter)
    if(this.counter == 3){
      this.counter = -1
    }
    this.counter += 1;
    
    
    
  }
  

}
  
  

  
  
  
    /*const draggable = Draggable.create("#outer-circle", {
      type: "rotation",
      inertia: true,
      onThrowComplete: function(){
        if(this.currentFeature !== this.feature){
          this.currentFeature = this.feature;
          var text = document.getElementById("text")
          var chosenItem = document.getElementById("chosenItem")
          if(this.currentFeature == "empassie"){
            this.products = (jsonData as any).default;
            text.innerHTML = this.products[0].text;
            chosenItem.innerHTML = this.products[0].name;
          } else if(this.currentFeature == "ondernemend"){
            this.products = (jsonData as any).default;
            text.innerHTML = this.products[1].text;
            chosenItem.innerHTML = this.products[1].name;
          } else if(this.currentFeature == "disciplinariteit"){
            this.products = (jsonData as any).default;
            text.innerHTML = this.products[2].text;
            chosenItem.innerHTML = this.products[2].name;
          } else if(this.currentFeature == "samenwerken"){
            this.products = (jsonData as any).default;
            text.innerHTML = this.products[3].text;
            chosenItem.innerHTML = this.products[3].name;
          }
        }
      },
      snap: function(endValue) { 
        var position = endValue
        var counter = 0
        if(endValue >= 0){
          while(position > 360){
            position -= 360
            counter += 1
          }
          if(position >= 0 && position < 90){
            this.feature = "empassie";
            console.log(this.feature)
            return 23 + (counter * 360)
          } else if(position >= 90 && position < 180){
            this.feature = "ondernemend"
            console.log(this.feature)
            return 156 + (counter * 360)
          } else if(position >= 180 && position < 270){
            this.feature = "disciplinariteit"
            console.log(this.feature)
            return 203 + (counter * 360)          
          } else if(position >= 270 && position < 360){
            this.feature = "samenwerken"
            console.log(this.feature)
            return 337 + (counter * 360)
          } 
        
        } else {
          while(position < -360){
            position += 360
            counter += 1
          }
          if(position <= 0 && position > -90){
            this.feature = "samenwerken"
            console.log(this.feature)
            return -23 - (counter * 360)
          } else if(position <= -90 && position > -180){
            this.feature = "disciplinariteit"
            console.log(this.feature)
            return -156 - (counter * 360)
          } else if(position <= -180 && position > -270){
            this.feature = "ondernemend"
            console.log(this.feature)
            return -203 - (counter * 360)          
          } else if(position <= -270 && position > -360){
            this.feature = "empassie";
            console.log(this.feature)
            return -337 - (counter * 360)
          } 
        }
      }
    });
    }
  }
*/
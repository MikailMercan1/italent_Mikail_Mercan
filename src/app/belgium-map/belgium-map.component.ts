import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-belgium-map',
  templateUrl: './belgium-map.component.html',
  styleUrls: ['./belgium-map.component.css']
})
export class BelgiumMapComponent implements OnInit {

  circleCentroidXHasselt: number;
  circleCentroidYHasselt: number;
  circleColorHasselt: string;

  circleCentroidXBrussels: number;
  circleCentroidYBrussels: number;
  circleColorBrussels: string;

  circleCentroidXSintTruiden: number;
  circleCentroidYSintTruiden: number;
  circleColorSintTruiden: string;

  eventsToDisplay: string[];

  //first x, then y coordinate
  places = [
     {coordinates: [335,180], name: 'Brussels', color: 'black', events: ["De Warmste Hackathon"]},
     {coordinates: [490,143], name: 'Hasselt', color: 'red', events: ["Projectweek 2019-2020", "Machine learning", "Firebase", "Brein aan het werk, niet storen!", "POPping", "Low code", "Blockchain (deel 1)", "Blockchain (deel 2)"]},
     {coordinates: [483,184], name: 'Sint-Truiden', color: 'blue', events: ["Op weg naar 5G", "Uitdagingen in de wereld van e-forensics & cybercrime", "Google Hash Code 2021"]}
   ];

  constructor(private router: Router) {
   }

  ngOnInit(): void {


    this.putDotsOnMap();
    document.getElementById("eventDiv").style.visibility = "hidden";
    

  }

  putDotsOnMap(){

    //Loop all items in places
    for (var i = 0; i < this.places.length; i++) {
      if(this.places[i].name === "Hasselt"){
        //Set right coordinates
        this.circleCentroidXHasselt = this.places[i].coordinates[0];
        this.circleCentroidYHasselt = this.places[i].coordinates[1];
        this.circleColorHasselt = this.places[i].color;
        //Get element by id
        var hasseltCircle = document.getElementById(this.places[i].name.toString())
        //Set onclick event
        hasseltCircle.addEventListener("click", (e:Event) => this.goToDetailPage("map/" + this.places[1].name));
        //Set mouseover event
        hasseltCircle.addEventListener("mouseover", (e:Event) => this.displayInfo(this.places[1].events));
        //Set mouseout event
        hasseltCircle.addEventListener("mouseout", (e:Event) => this.removeInfo());
      }

      if(this.places[i].name === "Brussels"){
        //Set right coordinates
        this.circleCentroidXBrussels = this.places[i].coordinates[0];
        this.circleCentroidYBrussels = this.places[i].coordinates[1];
        this.circleColorBrussels = this.places[i].color;    
        //Get element by id 
        var brusselsCircle = document.getElementById(this.places[i].name.toString())
        //Set onclick event
        brusselsCircle.addEventListener("click", (e:Event) => this.goToDetailPage("map/" + this.places[0].name));
        //Set mouseover event
        brusselsCircle.addEventListener("mouseover", (e:Event) => this.displayInfo(this.places[0].events));
        //Set mouseout event
        brusselsCircle.addEventListener("mouseout", (e:Event) => this.removeInfo());

      }   
      if(this.places[i].name === "Sint-Truiden"){
        //Set right coordinates
        this.circleCentroidXSintTruiden = this.places[i].coordinates[0];
        this.circleCentroidYSintTruiden = this.places[i].coordinates[1];
        this.circleColorSintTruiden = this.places[i].color;    
        //Get element by id 
        var sintTruidenCircle = document.getElementById(this.places[i].name.toString())
        //Set onclick event
        sintTruidenCircle.addEventListener("click", (e:Event) => this.goToDetailPage("map/" + this.places[2].name));
        //Set mouseover event
        sintTruidenCircle.addEventListener("mouseover", (e:Event) => this.displayInfo(this.places[2].events));
        //Set mouseout event
        sintTruidenCircle.addEventListener("mouseout", (e:Event) => this.removeInfo());

      }   
  }
}
  goToDetailPage(link: string){
    this.router.navigate(['/' + link])
  }

  displayInfo(events: string[]){
    if(window.innerWidth >= 992){
      console.log(window.innerWidth)
      this.eventsToDisplay = events;
      document.getElementById("eventDiv").style.visibility = "visible";
    }
    
  }

  removeInfo() : void {
    this.eventsToDisplay = []
    document.getElementById("eventDiv").style.visibility = "hidden";
  }
}

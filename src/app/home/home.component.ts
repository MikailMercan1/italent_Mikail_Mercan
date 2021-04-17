import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import * as jsonData from '../../assets/data-all-events/all-events.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = (jsonData as any).default;
  titles = []
  dates = []
  companies = []
  places = []
  descriptions = []

  constructor() { }

  ngOnInit(): void {
    for (let item of this.products){
      this.titles.push(item.name)
      this.dates.push(item.date)
      this.companies.push(item.company)
      this.places.push(item.place)
      this.descriptions.push(item.text)
    }
    for (let i = 0; i <this.titles.length; i++){
      var idTitle = "title" + i
      var idDescription = "description" + i
      var idCard = "card" + i
      var idDate = "date" + i
      var idCompany = "company" + i
      var idPlace = "place" + i
      document.getElementById(idTitle).innerHTML = this.titles[i];
      document.getElementById(idDate).innerHTML = "<b>Datum: </b>" + this.dates[i];
      document.getElementById(idCompany).innerHTML = "<b>Bedrijf: </b>" + this.companies[i];
      document.getElementById(idPlace).innerHTML = "<b>Locatie: </b>" + this.places[i];
      document.getElementById(idDescription).innerHTML = "<b>Beschrijving: </b>" + this.descriptions[i];
      
      if(i % 2 == 0){
        document.getElementById(idCard).style.backgroundColor = "lightgrey"
      }
    }
  }

}

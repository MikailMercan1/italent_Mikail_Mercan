import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import * as jsonData from '../../assets/data-all-events/all-events.json';
import * as jsonDataIntro from '../../assets/introduction/intro.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = (jsonData as any).default;
  intro = (jsonDataIntro as any).default
  cards = []

  constructor() { }

  ngOnInit(): void {
    // Intro
    document.getElementById("intro").innerHTML = this.intro[0].text;

    // Cards
    for (let item of this.products){
      let card = new ActivityCard(item.name, item.text, item.id, item.date, item.company, item.place, item.isExtra)
      this.cards.push(card)
    }
    for (let i = 0; i <this.cards.length; i++){
      var idTitle = "title" + i
      var idDescription = "description" + i
      var idCard = "card" + i
      var idDate = "date" + i
      var idCompany = "company" + i
      var idPlace = "place" + i
      var idExtra = "extra" + i
      document.getElementById(idTitle).innerHTML = this.cards[i].title;
      document.getElementById(idDate).innerHTML = "<b>Datum: </b>" + this.cards[i].date;
      document.getElementById(idCompany).innerHTML = "<b>Bedrijf: </b>" + this.cards[i].company;
      document.getElementById(idPlace).innerHTML = "<b>Locatie: </b>" + this.cards[i].place;
      document.getElementById(idDescription).innerHTML = "<b>Beschrijving: </b>" + this.cards[i].description;

      if(i % 2 == 0){
        document.getElementById(idCard).style.backgroundColor = "lightgrey"
      }

      if(this.cards[i].extra == "True"){
        document.getElementById(idExtra).innerHTML = "<b>Extra activiteit </b>"
      }
    }
  }

}

class ActivityCard {
  title: string;
  description: string;
  id: string;
  date: string;
  company: string;
  place: string;
  extra: string;

  constructor(title: string, description: string, id: string, date: string, company: string, place: string, extra: string){
    this.title = title;
    this.description = description;
    this.id = id;
    this.date = date;
    this.company = company;
    this.place = place;
    this.extra = extra;
  }
}

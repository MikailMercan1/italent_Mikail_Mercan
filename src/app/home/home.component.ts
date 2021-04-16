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
  descriptions = []

  constructor() { }

  ngOnInit(): void {
    for (let item of this.products){
      this.titles.push(item.name)
      this.descriptions.push(item.text)
    }
    for (let i = 0; i <this.titles.length; i++){
      var idTitle = "title" + i
      var idDescription = "description" + i
      document.getElementById(idTitle).innerHTML = this.titles[i];
      document.getElementById(idDescription).innerHTML = this.descriptions[i];
    }
  }

}

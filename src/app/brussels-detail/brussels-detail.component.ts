import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brussels-detail',
  templateUrl: './brussels-detail.component.html',
  styleUrls: ['./brussels-detail.component.css']
})
export class BrusselsDetailComponent implements OnInit {

  events = [["pop sessie 4 test test test test test", "#99ff99"], ["event2", "#66ffff"], ["event3", "#9999ff"], ["event4", "#ff99cc"], ["event5", "#ffff66 "], ["event6", "#ccff66"]]

  constructor() { }

  ngOnInit(): void {
    document.getElementById('banner2').style.backgroundImage = "url('../../assets/images/br_banner_2.jpg')";
    document.getElementById('banner1').style.backgroundImage = "url('../../assets/images/br_banner_1.jpg')" ;
    this.createPage();
  }

  createPage() {
    for (let i = 0; i <this.events.length; i++){
      var id = "card" + i;
      console.log(id)
      document.getElementById(id).style.background =  "linear-gradient(to bottom right, " + this.events[i][1] + ", #ffffff 100%)";
      document.getElementById(id).addEventListener("click", (e:Event) => this.openEvent(this.events[i][0]));
      document.getElementById(id).innerHTML = this.events[i][0];
    }
  }


  openEvent(event: string){
    console.log(event)
  }

}

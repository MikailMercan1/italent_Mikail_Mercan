import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sint-truiden-detail',
  templateUrl: './sint-truiden-detail.component.html',
  styleUrls: ['./sint-truiden-detail.component.css']
})
export class SintTruidenDetailComponent implements OnInit {

  events = [["pop sessie 4 test test test test test", "#99ff99"], ["event2", "#66ffff"], ["event3", "#9999ff"], ["event4", "#ff99cc"], ["event5", "#ffff66 "], ["event6", "#ccff66"]]

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    document.getElementById('banner1').style.backgroundImage = "url('../../assets/images/st_banner_2.jpg')";
    document.getElementById('banner2').style.backgroundImage = "url('../../assets/images/st_banner_1.jpg')" ;
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
    this.dataService.data = event
    this.router.navigate(['/event'])
  }

}

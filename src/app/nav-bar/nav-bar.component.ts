import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClickHome() : void
  {
    this.router.navigate(['/'])
  }

  onClickMap() : void
  {
    this.router.navigate(['/map'])
  }

  onClickXFactor() : void
  {
    this.router.navigate(['/x-factor'])
  }

  onClickContact() : void
  {
    window.location.href = 'https://be.linkedin.com/in/mikail-mercan-8839a51a1';
  }

  

}

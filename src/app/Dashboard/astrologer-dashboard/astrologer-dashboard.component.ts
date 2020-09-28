import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-astrologer-dashboard',
  templateUrl: './astrologer-dashboard.component.html',
  styleUrls: ['./astrologer-dashboard.component.scss']
})
export class AstrologerDashboardComponent implements OnInit {

  constructor(private _route : Router) { }

  ngOnInit(): void {

  }

  astroReport() {
    this._route.navigate(['dashboard/astroReport']);
  }

  astroQuestion() {
    this._route.navigate(['dashboard/astroQuestion']);
  }


}

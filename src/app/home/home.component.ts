import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public openModal: boolean = false;
  public showPopup: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openFeatureModal(){
    console.log("Opening modal")
    this.openModal = true ;
  }

  closeEvent(){
    this.openModal=false;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public desktopIcons = ['My-App', 'Playlists',  'Artists', 'Search', 'Recycle'];
  public selectedDocuments = [];

  constructor() { }

  ngOnInit() {
  }

  logger(stuff): any {
    console.log(stuff)
  }

}

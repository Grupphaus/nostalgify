import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public desktopIcons = ['My-App', 'Playlists',  'Artists', 'Search', 'Recycle'];
  public selectedDocuments = [];

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
    this._spotify.getReleases()
    .subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  logger(stuff): any {
    console.log(stuff)
  }

}

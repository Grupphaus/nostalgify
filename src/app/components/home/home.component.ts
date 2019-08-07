import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _spotify: SpotifyService, private route: ActivatedRoute) { }

  newReleases: any[] = [];

  ngOnInit() {
    this._spotify.getReleases()
    .subscribe(
      (response: any) => {
        this.newReleases = response.albums.items;
        console.log(this.newReleases);
      },
      err => {
        console.log(err);
      }
    );
  }

}

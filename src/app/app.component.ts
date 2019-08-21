import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  title = 'Nostalgify95';
  public desktopIcons = ['Home', 'Playlists', 'Search', 'Recycle'];
  public selectedDocuments = [];

  logger(stuff: any) {
    console.log(stuff);
  }

  navigate(path: string) {
    this.router.navigate(['/' + path.toLowerCase()]);
  }
}

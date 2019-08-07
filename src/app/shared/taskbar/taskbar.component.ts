import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  @Input() public menu = false;
  @Input() programsExpand: boolean;
  @Input() documentsExpand: boolean;
  public menuList = ['Programs', 'Documents', 'About', 'Run...'];
  public appList = ['My-App', 'Playlists', 'Artists', 'Search', 'Recycle'];
  public documentList = ['asdasd.xls', 'ddd.txt', 'component.css', 'github.png'];
  public clock: Date;

  constructor() { }

  ngOnInit() {
      setInterval(() => {
        this.clock = new Date();
      }, 1000);
  }

  toggleMenu() {
    const isFocused = document.activeElement;
    const start = document.getElementById('start');

    if (start === isFocused) {
      this.menu = true;
    } else {
      this.menu = false;
      this.documentsExpand = false;
      this.programsExpand = false;
    }
  }

  expand(menu) {
    switch (menu) {
      case 'Programs':
        this.programsExpand = true;
        this.documentsExpand = false;
        break;
      case 'Documents':
        this.programsExpand = false;
        this.documentsExpand = true;
        break;
      default:
        this.programsExpand = false;
        this.documentsExpand = false;
        break;
    }
  }

}

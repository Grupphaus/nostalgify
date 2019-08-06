import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }

  @Input() name: string = 'window';
  @Input() menu: boolean = true;

  ngOnInit() {
  }

}

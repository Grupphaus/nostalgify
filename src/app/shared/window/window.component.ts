import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @Input() name: string;
  @Input() menu: boolean = true;

  ngOnInit() {

  }
}

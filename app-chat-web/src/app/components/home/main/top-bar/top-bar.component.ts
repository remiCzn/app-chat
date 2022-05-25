import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  channel: {
    name: string;
    description: string;
  } = {
    name: 'general',
    description: 'Just chatting',
  };

  constructor() {}

  ngOnInit(): void {}
}

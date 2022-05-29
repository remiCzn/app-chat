import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-button',
  templateUrl: './server-button.component.html',
  styleUrls: ['./server-button.component.css'],
})
export class ServerButtonComponent implements OnInit {
  @Input() server: {
    id: number;
    name: string;
  } = {
    id: 0,
    name: '',
  };

  constructor() {}

  ngOnInit(): void {}
}

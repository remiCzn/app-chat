import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-button',
  templateUrl: './channel-button.component.html',
  styleUrls: ['./channel-button.component.css'],
})
export class ChannelButtonComponent implements OnInit {
  @Input() name: string = '';
  @Input() active: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

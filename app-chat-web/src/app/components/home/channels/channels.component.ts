import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit {
  username: string = 'David Bowie';
  servername: string = 'Server';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() text: string = '';
  @Input() user: string = '';
  @Input() date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}

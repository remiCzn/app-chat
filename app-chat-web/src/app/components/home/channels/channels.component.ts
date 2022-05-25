import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit {
  username: string = 'David Bowie';
  servername: string = 'Server';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsername().then((username) => {
      this.username = username;
      console.log(username);
    });
  }
}

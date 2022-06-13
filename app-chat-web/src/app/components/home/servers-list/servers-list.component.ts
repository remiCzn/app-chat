import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Server } from 'app-chat-model';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css'],
})
export class ServersListComponent implements OnInit {
  servers: Array<Server> = [];

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getAllServers().then((res: Server[]) => {
      this.servers = res;
    });
  }
}

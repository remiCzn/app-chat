import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css'],
})
export class ServersListComponent implements OnInit {
  servers: Array<{ name: string; id: number }> = [];

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getAllServers().then((res) => {
      this.servers = res;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ServersListComponent } from './servers-list/servers-list.component';
import { ChannelsComponent } from './channels/channels.component';
import { MainComponent } from './main/main.component';
import { ServerButtonComponent } from './servers-list/server-button/server-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServersListComponent,
    ChannelsComponent,
    MainComponent,
    ServerButtonComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}

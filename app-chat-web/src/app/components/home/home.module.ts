import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ServersListComponent } from './servers-list/servers-list.component';
import { ChannelsComponent } from './channels/channels.component';
import { MainComponent } from './main/main.component';
import { ServerButtonComponent } from './servers-list/server-button/server-button.component';
import { TopBarComponent } from './main/top-bar/top-bar.component';
import { ChatMessagesComponent } from './main/chat-messages/chat-messages.component';
import { TypingBarComponent } from './main/typing-bar/typing-bar.component';
import { MessageComponent } from './main/chat-messages/message/message.component';
import { ChannelButtonComponent } from './channels/channel-button/channel-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServersListComponent,
    ChannelsComponent,
    MainComponent,
    ServerButtonComponent,
    TopBarComponent,
    ChatMessagesComponent,
    TypingBarComponent,
    MessageComponent,
    ChannelButtonComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}

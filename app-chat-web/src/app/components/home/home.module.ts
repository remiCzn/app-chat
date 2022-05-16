import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RightHeaderComponent } from './header/right-header/right-header.component';
import { CenterHeaderComponent } from './header/center-header/center-header.component';
import { LeftHeaderComponent } from './header/left-header/left-header.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ChannelsComponent } from './main/channels/channels.component';
import { ContentComponent } from './main/content/content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RightHeaderComponent,
    CenterHeaderComponent,
    LeftHeaderComponent,
    HomeComponent,
    MainComponent,
    ChannelsComponent,
    ContentComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}

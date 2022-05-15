import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './components/login/login.module';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/utils/modal/modal.component';
import { IconComponent } from './components/utils/icon/icon.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ModalComponent, IconComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

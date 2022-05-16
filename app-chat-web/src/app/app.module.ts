import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModule } from './components/login/login.module';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/utils/modal/modal.component';
import { IconComponent } from './components/utils/icon/icon.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './guards/auth/auth-interceptor.service';
import { NotFoundComponent } from './components/utils/not-found/not-found.component';
import { UnauthorizedComponent } from './components/utils/unauthorized/unauthorized.component';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent,
    IconComponent,
    NotFoundComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

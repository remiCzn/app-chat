import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../../../services/jwt-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  channel: {
    name: string;
    description: string;
  } = {
    name: 'general',
    description: 'Just chatting',
  };

  constructor(private jwtService: JwtTokenService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['']);
  }
}

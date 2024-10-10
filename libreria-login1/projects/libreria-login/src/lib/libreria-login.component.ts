import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-libreria-login',
  standalone: true,
  imports: [],
  templateUrl: `/libreria-login.component.html`,
  styles: ``
})
export class LibreriaLoginComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('undec-token')) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + "#/home")))
    const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64
    window.location.assign(authUrl);
  }
}

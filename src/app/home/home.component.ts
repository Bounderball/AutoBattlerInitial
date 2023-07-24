import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { HttpServiceService } from '../Services/http-service.service';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: string = "no_money";
  loading: boolean = false;

  constructor(private httpServiceService: HttpServiceService, private user: UserService, public r: Router) { }

  login() {
    this.loading = true;
    const url = environment.serverPrefix + 'getpos';
    const requestBody = { user: this.username };
    this.httpServiceService.post(url, requestBody).subscribe(
      response => {
        this.user.user = response.body;
      },
      error => { },
      () => { this.r.navigate(['shop']); }
    );
  }

}

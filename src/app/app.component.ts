import { HttpServiceService } from './Services/http-service.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './Models/user';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public r: Router) { }

  ngOnInit() {
    this.r.navigate(['home']);
  }
}

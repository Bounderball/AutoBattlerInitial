import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment.prod';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private httpServiceService: HttpServiceService)
  {
    this.user = new User();
  }

}

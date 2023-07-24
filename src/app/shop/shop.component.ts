import { HttpServiceService } from '../Services/http-service.service';
import { ApplicationRef, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Models/user';
import { Router } from "@angular/router";
import { UserService } from '../Services/user.service';
import { environment } from 'src/environments/environment.prod';
import { CdkDragDrop, CdkDragEnter, CdkDragSortEvent, CdkDragStart, moveItemInArray } from '@angular/cdk/drag-drop';

import { checkVacancy, roll, buy, sell, swap, swapLocally } from './shopLogic';
import { release, numberToName, rolling, buying, switching, selling, autoHideInitialMessages } from './shopUI';

@Component({
  selector: 'app-root',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  inputName: string = "user_test";
  rollResponse: any;
  buyFromProp: string = "";
  moveFromProp: string;
  moving: boolean = false;
  vacancy: boolean;
  rolling: boolean = false;
  switching: boolean = false;
  selling: boolean = false;
  dragToReorderMessage: boolean = true;
  buying: boolean = false;


  constructor(public httpServiceService: HttpServiceService, public user: UserService, public r: Router) { }

  ngOnInit() {
    checkVacancy(this); // Check whether there is vacant space in the party to buy a character to (from the shop)
    autoHideInitialMessages(this);
  }

  roll() {
    rolling(true, this); // Show rolling message
    roll(this); // Roll
  }

  buy(username: string, buyFromProp: string, buyToProp: string) {
    buy(username, buyFromProp, buyToProp, this);
  }

  sell(pos: string) {
    selling(true, this);
    sell(pos, this);
  }

  moveFromMethod(from: string) {
    this.moveFromProp = from;
    this.moving = true;
  }

  moveToMethod(to: string) {
    this.moving = false;
    swap(this.user.user.username, this.moveFromProp, to, this);
  }

  buyFromMethod(buyFromProp: string) {
    this.buyFromProp = buyFromProp;
  }

  buyToMethod(buyToProp: string) {
    buying(true, this); // Show rolling message
    this.buy(this.user.user.username, this.buyFromProp, buyToProp);
    this.buyFromProp = "";
  }

  release() {
    release(this);
  }

  drop(event: CdkDragDrop<string[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    
    // Swap the items
    let previous = numberToName(event.previousIndex);
    let current = numberToName(event.currentIndex);
    
    switching(true, this);

    swapLocally(previousIndex, currentIndex, this);

    swap(
      this.user.user.username,
      previous,
      current,
      this
    );
  }

  navToFight() {
    this.r.navigate(['fight']);
  }

}

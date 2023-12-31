import { Component, Renderer2 } from '@angular/core';
import { Party } from '../Models/party';
import { Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { getFightHistory } from './fightLogic';
import { chooseBackground } from './fightUI';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  constructor(private r: Router, public httpServiceService: HttpServiceService, public renderer: Renderer2) {

  }

  backgroundNumber: number;
  backgroundImageUrl: string;
  fight_demo: object;
  heroesParty: Party;
  enemiesParty: Party;

  ngOnInit() {
    this.chooseBackground();
    this.getFightHistory();
  }

  chooseBackground() {
    chooseBackground(this);
  }

  getFightHistory() {
    getFightHistory(this);
  }

}

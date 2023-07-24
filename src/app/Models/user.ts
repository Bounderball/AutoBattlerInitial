import { Party } from "./party";
import { Shop } from "./shop";

export class User {

  
  private _shop : Shop;
  public get shop() : Shop {
    return this._shop;
  }
  public set shop(v : Shop) {
    this._shop = v;
  }
  

  private _party: Party;
  public get party(): Party {
    return this._party;
  }
  public set party(v: Party) {
    this._party = v;
  }


  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(v: string) {
    this._username = v;
  }


  private _victories: number;
  public get victories(): number {
    return this._victories;
  }
  public set victories(v: number) {
    this._victories = v;
  }


  private _lives: number;
  public get lives(): number {
    return this._lives;
  }
  public set lives(v: number) {
    this._lives = v;
  }


  private _gold: number;
  public get gold(): number {
    return this._gold;
  }
  public set gold(v: number) {
    this._gold = v;
  }

}

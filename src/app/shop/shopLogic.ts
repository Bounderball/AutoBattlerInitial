import { ShopComponent } from "./shop.component";
import { environment } from "src/environments/environment.prod";
import { rolling, buying, switching, selling } from "./shopUI";
import { Party } from "../Models/party";
import { Character } from "../Models/character";

export function checkVacancy(This: ShopComponent) {
    if (This.user.user.party.first != null && This.user.user.party.second != null && This.user.user.party.third != null && This.user.user.party.fourth != null) {
        This.vacancy = false;
    }
    else {
        This.vacancy = true;
    }
}

export function roll(This: ShopComponent) {
    const url = environment.serverPrefix + 'roll';
    const requestBody = { user: This.user.user.username, free_roll: false };
    This.httpServiceService.post(url, requestBody).subscribe(
        response => {
            This.rollResponse = response.body;
            if (response.body != "No Gold") {
                This.user.user.gold = response.body.gold;
                This.user.user.shop = response.body.shop;
            }
            else {
                alert("No Gold!");
            }
        },
        (error) => { },
        () => { rolling(false, This); }
    );
}

export function buy(username: string, buyFromProp: string, buyToProp: string, This: ShopComponent) {
    const url = environment.serverPrefix + 'buy';
    const requestBody = { user: username, item_to_buy: buyFromProp, pos: buyToProp };
    This.httpServiceService.post(url, requestBody).subscribe(
        response => {
            if (response.body == "no money") {
                alert("Not enough gold!");
            }
            else {
                This.user.user = response.body;
            }
        },
        error => { },
        () => {
            debugger;
            buying(false, This);
            checkVacancy(This);
        }
    );
}

export function sell(pos: string, This: ShopComponent) {
    const url = environment.serverPrefix + 'sell';
    const requestBody = { user: This.user.user.username, pos: pos };
    This.httpServiceService.post(url, requestBody).subscribe(
        response => {
            This.user.user = response.body;
        },
        error => { },
        () => {
            selling(false, This);
            checkVacancy(This);
        }
    );
}

export function swap(username: string, from: string, to: string, This: ShopComponent) {

    const url = environment.serverPrefix + 'switch';
    const requestBody = { user: username, item_one: from, item_two: to };
    This.httpServiceService.post(url, requestBody).subscribe(
        response => {
            This.user.user = response.body;
        },
        error => { },
        () => { switching(false, This); }
    );
}

export function swapLocally(from: number, to: number, This: ShopComponent) {
    let partyVar: Character[] = [
        This.user.user.party.first,
        This.user.user.party.second,
        This.user.user.party.third,
        This.user.user.party.fourth
    ];

    let steps: number = Math.abs(from - to);

    if (from > to) { // Going left
        for (let i = from; i > to; i--) {
            partyVar = swapTwo(partyVar, i, i - 1);
        }
    }
    else if (from < to) { // Going right
        for (let i = from; i < to; i++) {
            partyVar = swapTwo(partyVar, i, i + 1);
        }
    }

    This.user.user.party.first = partyVar[0];
    This.user.user.party.second = partyVar[1];
    This.user.user.party.third = partyVar[2];
    This.user.user.party.fourth = partyVar[3];

}

function swapTwo(partyVar: Character[], from: number, to: number): Character[] {
    console.log(partyVar);
    let obj: Character = partyVar[to];
    partyVar[to] = partyVar[from];
    partyVar[from] = obj;
    return partyVar;
}

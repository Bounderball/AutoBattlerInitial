import { FightComponent } from "./fight.component";
import { environment } from "src/environments/environment.prod";

export function getFightHistory(This: FightComponent) {
    const url = environment.serverPrefix + 'fight_demo';
    This.httpServiceService.post(url, null).subscribe(
        response => {
            This.fight_history = response.body.fight_history;
            This.heroesParty = response.body.my_party;
            This.enemiesParty = response.body.enemies_party;
            
        },
        (error) => {},
        () => {playTurn(This)}
    );
}

function playTurn(This: FightComponent) {
    // setInterval(() => {
    //     This.currentTurn = (This.currentTurn + 1) % This.fight_history.length;
    // }, 3000);
}
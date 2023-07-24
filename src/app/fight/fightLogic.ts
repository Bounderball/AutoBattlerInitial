import { FightComponent } from "./fight.component";
import { environment } from "src/environments/environment.prod";

export function getFightHistory(This: FightComponent) {
    const url = environment.serverPrefix + 'fight_demo';
    This.httpServiceService.post(url, null).subscribe(
        response => {
            This.fight_demo = response.body;
            This.heroesParty = response.body.my_party;
            This.enemiesParty = response.body.enemies_party;
            
        },
        (error) => {},
        () => {}
    );
}
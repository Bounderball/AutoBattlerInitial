import { FightComponent } from "./fight.component";

export function chooseBackground(This: FightComponent) {
    This.backgroundNumber = Math.floor(Math.random()*4) + 1;
    This.backgroundImageUrl = "../../assets/battleField" + This.backgroundNumber + ".png";
    This.renderer.setStyle(document.getElementById('fightBackground'), "background-image", `url('${This.backgroundImageUrl}')`);
}
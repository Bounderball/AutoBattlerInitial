export class Character {
    
    private _type : string;
    public get type() : string {
        return this._type;
    }
    public set type(v : string) {
        this._type = v;
    }
    
    
    private _health : number;
    public get health() : number {
        return this._health;
    }
    public set health(v : number) {
        this._health = v;
    }
    
    
    private _attack : number;
    public get attack() : number {
        return this._attack;
    }
    public set attack(v : number) {
        this._attack = v;
    }
    
}

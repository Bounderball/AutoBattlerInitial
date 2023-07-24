import { Character } from "./character";

export class Shop {

    private _first : Character;
    public get first() : Character {
        return this._first;
    }
    public set first(v : Character) {
        this._first = v;
    }
    
    
    private _second : Character;
    public get second() : Character {
        return this._second;
    }
    public set second(v : Character) {
        this._second = v;
    }
    
    
    private _third : Character;
    public get third() : Character {
        return this._third;
    }
    public set third(v : Character) {
        this._third = v;
    }
    
    
    private _fourth : Character;
    public get fourth() : Character {
        return this._fourth;
    }
    public set fourth(v : Character) {
        this._fourth = v;
    }

}

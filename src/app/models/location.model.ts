export class Location{
    id:number;
    country:string;
    country_code:string;
    country_population:number;
    province:string;
    last_updated:string;
    coordinates:{
        latitude:number,
        longitude:number
    };
    latest:{
        confirmed:number,
        deaths:number,
        recovered:number
    }
    constructor(){
        
    }
}
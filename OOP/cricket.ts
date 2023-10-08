class Cricketer{
    name:string;
    age:number;
    country:string;
    constructor(name:string,age:number,country:string){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    getDetails(){
        return `Name: ${this.name} Age: ${this.age} Country: ${this.country}`;
    }
}
class Batsman extends Cricketer{
    runs:number;
    constructor(name:string,age:number,country:string,runs:number){
        super(name,age,country);
        this.runs=runs;
    }
    getDetails(){
        return `${super.getDetails()} Runs: ${this.runs}`;
    }
}
class Bowler extends Cricketer{
    wickets:number;
    constructor(name:string,age:number,country:string,wickets:number){
        super(name,age,country);
        this.wickets=wickets;
    }
    getDetails(){
        return `${super.getDetails()} Wickets: ${this.wickets}`;
    }
}
class AllRounder extends Cricketer{
    runs:number;
    wickets:number;
    constructor(name:string,age:number,country:string,runs:number,wickets:number){
        super(name,age,country);
        this.runs=runs;
        this.wickets=wickets;
    }
    getDetails(){
        return `${super.getDetails()} Runs: ${this.runs} Wickets: ${this.wickets}`;
    }
}

class WicketKeeper extends Cricketer{
    catches:number;
    stumpings:number;
    constructor(name:string,age:number,country:string,catches:number,stumpings:number){
        super(name,age,country);
        this.catches=catches;
        this.stumpings=stumpings;
    }
    getDetails(){
        return `${super.getDetails()} Catches: ${this.catches} Stumpings: ${this.stumpings}`;
    }
}


let Afridi=new AllRounder("Shahid Afridi",40,"Pakistan",10000,500);
console.log(Afridi.getDetails());

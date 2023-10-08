"use strict";
class Cricketer {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getDetails() {
        return `Name: ${this.name} Age: ${this.age} Country: ${this.country}`;
    }
}
class Batsman extends Cricketer {
    constructor(name, age, country, runs) {
        super(name, age, country);
        this.runs = runs;
    }
    getDetails() {
        return `${super.getDetails()} Runs: ${this.runs}`;
    }
}
class Bowler extends Cricketer {
    constructor(name, age, country, wickets) {
        super(name, age, country);
        this.wickets = wickets;
    }
    getDetails() {
        return `${super.getDetails()} Wickets: ${this.wickets}`;
    }
}
class AllRounder extends Cricketer {
    constructor(name, age, country, runs, wickets) {
        super(name, age, country);
        this.runs = runs;
        this.wickets = wickets;
    }
    getDetails() {
        return `${super.getDetails()} Runs: ${this.runs} Wickets: ${this.wickets}`;
    }
}
class WicketKeeper extends Cricketer {
    constructor(name, age, country, catches, stumpings) {
        super(name, age, country);
        this.catches = catches;
        this.stumpings = stumpings;
    }
    getDetails() {
        return `${super.getDetails()} Catches: ${this.catches} Stumpings: ${this.stumpings}`;
    }
}
let Afridi = new AllRounder("Shahid Afridi", 40, "Pakistan", 10000, 500);
console.log(Afridi.getDetails());

let input =[20,8,14,30,16];
let daysOfCampaing=input[0];
let confectioners=input[1];
let cakes =input[2];
let waffles=input[3];
let pancakes=input[4];

let moneyForCakes=cakes*45;
let moneyForWaffles=waffles*5.80;
let moneyForPancakes=pancakes*3.20;

let moneyForOneDay=(moneyForCakes+moneyForWaffles+moneyForPancakes)
    *confectioners;
let moneyForAllCampaing=daysOfCampaing*moneyForOneDay;
let moneyAfterExpenses=moneyForAllCampaing-(moneyForAllCampaing/8);
console.log(moneyAfterExpenses.toFixed(2));

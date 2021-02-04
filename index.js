let isHotOutside = true;
let isWeekday = false;
let hasMoneyInPocket = true;

var costOfMilk = 3;
var moneyInWallet = 18;
var thirstLevel = 7; // how thirsty you are on a scale of 1-10

var shouldByIcecream = isHotOutside && hasMoneyInPocket; {
    console.log(shouldByIcecream);
} 
var willGoSwimming = isHotOutside && !isWeekday; {
    console.log(willGoSwimming);
} 
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday; {
    console.log(isAGoodDay);
}
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= (2*costOfMilk); {
    console.log(willBuyMilk);
}
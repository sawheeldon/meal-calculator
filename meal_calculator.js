
/* global $ */

//objects holding the display names and costs of all the dinner items
var app = {
    bread: ['brown rolls',1.99],
    taco: ['spicy taco',2.99]
}

var salad = {
    tuna: ['tuna salad',6.99],
    cheese: ['cheese salad',4.99],
    apple: ['apple salad',4.65]
}

var main_course = {
    meat : ['steak',20.95],
    chicken: ['chicken burger',15.66],
    fish: ['plaice',13.49]
}

var dessert = {
    cake: ['red velvet cake',3.59],
    iceCream: ['chocolate ice cream',2.99]
}

var drinks = {
    beer: ['blue moon',3.99],
    wine: ['shiraz',5.99],
    cocktail: ['sex on the beach',7.99]
}

//define globals
var total;
var tax;
var tip;
var tipArr =[];

//diner object constructor, call with items they ordered
var diner = function(name,appetizer,salad,main_course,dessert,drinks) {
    this.name = name;
    this.appetizer = appetizer;
    this.salad = salad;
    this.main_course = main_course;
    this.dessert = dessert;
    this.drinks = drinks;
}

//diner obj methods
diner.prototype = {
    //addTotal sums the prices of all the dinner items ordered, returns the total
    addTotal:function () {
        var appPrice = app[this.appetizer][1];
        var saladPrice = salad[this.salad][1];
        var mainPrice = main_course[this.main_course][1];
        var dessertPrice = dessert[this.dessert][1];
        var drinksPrice = drinks[this.drinks][1];
        
        total = appPrice + saladPrice + mainPrice + dessertPrice + drinksPrice;
        total = total.toFixed(2);
        console.log(this.name + " ordered: " + app[this.appetizer][0]+ "," + salad[this.salad][0] + "," + main_course[this.main_course][0] + "," + dessert[this.dessert][0] + "," + drinks[this.drinks][0] + ", for a cost of:£ " + total);
        return total;
    },
    //calcTax generates the tax from the total dinner $$$
    calcTax:function () {
        //assume an 8% tax rate
        //tax doesn't include the tip
        tax = total *.08;
        tax = tax.toFixed(2);
        console.log("Tax was:£ " + tax);
    },
    //calcTip generates the tip from the total dinner £££, includes the tax
    calcTip:function() {
        //give a 12% tip, standard in the UK!
        
        tip = total * .12;
        tip = tip.toFixed(2);
        console.log("Tip was:£ " + tip);
        tipArr.push(tip); //build an array for the tips from each diner
    }
};

//dinnergroup object constructor function
var dinnerGroup = function(diner1,diner2,diner3) {
    this.diner1 = diner1;
    this.diner2 = diner2;
    this.diner3 = diner3;
}

//dinnergroup methods
dinnerGroup.prototype = {
    //total Pete sums the total of all the diner's bills
    totalPete:function () {
        var finalPete = +danTotal + +simonTotal + +nikkiTotal;
        finalPete = finalPete.toFixed(2);
        console.log("Dining group's total bill is :£ " + finalPete);
    },
    //totalTips sums (reduces) the values in the tip array
    totalTips:function () {
        var finalTips = tipArr.reduce(function(a, b) { 
            return a + +b; 
        }, 0);
        console.log("Dining group's total tip:£ " + finalTips);
    },
    //dinerEachbill function handled earlier in the code - here for legacy
    dinerEachPete:function () {
      //handled by totalling above
    }
};

//new 'dan' diner object, passing in name and dinner order
//calling methods, displaying the total
var dan = new diner("Dan","bread","tuna","fish","iceCream","wine");
dan.addTotal();
dan.calcTax();
dan.calcTip();
var danTotal =  +total + +tax + +tip;
danTotal = danTotal.toFixed(2);
console.log("Dan's total was:£ " + danTotal);
console.log("-------------");
 
//new 'steve' diner object, passing in name and dinner order
//calling methods, displaying the total 
var simon = new diner("Simon","taco","cheese","chicken","cake","beer");
simon.addTotal();
simon.calcTax();
simon.calcTip();
var simonTotal =  +total + +tax + +tip;
simonTotal = simonTotal.toFixed(2);
console.log("Simon's total: " + simonTotal);
console.log("-------------");

//new 'pam' diner object, passing in name and dinner order
//calling methods, displaying the total
var nikki = new diner("Nikki","taco","apple","meat","cake","wine");
nikki.addTotal();
nikki.calcTax();
nikki.calcTip();
var nikkiTotal =  +total + +tax + +tip;
nikkiTotal = nikkiTotal.toFixed(2);
console.log("Nikki's total: " + nikkiTotal);
console.log("-------------");
        
//new dinnergroup object, passing in name of diners
var dinnerGroup = new dinnerGroup("Dan","Simon","Nikki");

//calling the methods to generate the total bill and the total tips
dinnerGroup.totalPete(danTotal,simonTotal,nikkiTotal);

dinnerGroup.totalTips(tipArr);

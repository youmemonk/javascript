// Challenge 2
function calcTip(amount){
    const tipPercentage = amount >= 50 && amount <= 300 ? 15 : 20;
    const tip = amount * tipPercentage / 100;
    return tip;
}

// // console.log(calcTip(100));

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

// console.log(bills);
// console.log(tips);
// console.log(totals);

// Challenge 3
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if(mark.calcBMI < john.calcBMI()){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// } else {
//     console.log("They have the same BMI!");
// }

// Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    
    const average = total / arr.length;
    return average;
}

const averageTotals = calcAverage(totals);
console.log(averageTotals)
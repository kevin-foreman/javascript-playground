// Assuming that sales tax is 9.5% and a tip is 15%
// Do not tip on the sales tax, only the pre-tip amount

function calculateBillTotal(preTaxAndTipAmount) {
    // your code here

    var billTotal = preTaxAndTipAmount * .15 + preTaxAndTipAmount * .095 + preTaxAndTipAmount;

    return billTotal;

};

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
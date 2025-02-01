
//Task 1 - Customer Discounts

let purchaseAmount = 250;
let discount = 0;
if (purchaseAmount > 100) {discount = 0.1 * purchaseAmount};
//made if statement for discount
// if purchase is greater than 100 then they get discount of 10%

let finalAmount = purchaseAmount - discount;
// made a final amount with disocunt included 

console.log ("Purchase Amount:", purchaseAmount);
console.log(`Final amount after discount: $${finalAmount}`);




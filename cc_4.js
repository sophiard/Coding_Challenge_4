
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



// Task 2 - Sales Report

let sales = [90, 70, 100, 60, 30];
//declared an array sales with 5 different values 

let totalSales = 0;

for (let i = 0; i < sales.length; i++) 
    {totalSales += sales[i]};
//I used a for loop which helped calculate the total sales 

console.log(`Total sales: $${totalSales}`);

// task 3

let stock = 10; 
while (stock > -1)
     { console.log(`Amount of stock remaining: ${stock}`); stock--; };
//used a while loop with a temperate literal to log each decrement 






/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  const uniqueCategories = Array.from(new Set(transactions.map(item => item.category)));
  let bill = [];
  for(let item of uniqueCategories){
    let totalPrice = 0;
    for(let i=0;i<transactions.length;i++){
      if(item === transactions[i].category){
        totalPrice = totalPrice + transactions[i].price;
      }
    }
    bill.push({category: item, totalSpent: totalPrice});
  }
  return bill;
}

module.exports = calculateTotalSpentByCategory;

// function calculateTotal(items, discountCode) {
//   if (!Array.isArray(items)) {
//     throw new Error('Items must be an array');
//   }

//   if (items.length === 0) {
//     return 0;
//   }

//   let total = items.reduce((sum, item) =>
//      {
//     return sum + item.price * item.qty;
//   }, 0);

//   let total = subtotal

//   if (discountCode === 'STUDENT10') {
//     total = total * 0.9;
//   }

//   if (subtotal < 100 && discountCode != "FREESHIP") {
//     total += 5;
//   }


//   return total;
// }

// module.exports = { calculateTotal };

function calculateTotal(items, discountCode) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
 
  if (items.length === 0) {
    return 0;
  }
 
 
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
 
 
  let total = subtotal;
 
  if (discountCode === 'STUDENT10') {
    total *= 0.9;
  }
 
 
  if (subtotal < 100 && discountCode !== 'FREESHIP') {
    total += 5;
  }
 
  return total;
}
 
module.exports = { calculateTotal };
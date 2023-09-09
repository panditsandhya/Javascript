//reduce method
// acc: accumulator
// currValue: Current Value

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currValue) {
//     console.log(`acc: ${acc} and currValue: ${currValue}`);
//     return acc + currValue
// }, 0) // 0 is accumulator value

// In arraow function

const myTotal = myNums.reduce( (acc, currValue) => acc + currValue, 0 )

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },

    {
        itemName: "Mobile development course",
        price: 2999
    },
    {
        itemName: "React course",
        price: 1999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item. price, 0 )

console.log(priceToPay);

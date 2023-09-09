// ForEach, Filter

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, Edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1981, Edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1981, Edition: 2007},
    {title: 'Book Four', genre: 'Non-Fictionn', publish: 2004, Edition: 2010},
    {title: 'Book Five', genre: 'Scienc', publish: 1981, Edition: 1996},
    {title: 'Book Six', genre: 'Fiction', publish: 2006, Edition: 1998},
    {title: 'Book Seven', genre: 'History', publish: 2008, Edition: 2004},
    {title: 'Book Eight', genre: 'Fiction', publish: 1981, Edition: 2004}
];

//let userBooks = books.filter( (bk) => bk.genre === 'Fiction')

// const userBooks = books.filter( (bk) => bk.publish === 1981)

// const userBooks = books.filter( (bk) => { return  bk.publish >= 2000})

const userBooks = books.filter( (bk) => { return  bk.publish >= 2000 && bk.genre === 'History'})


console.log(userBooks);
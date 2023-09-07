
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allHeros1 = marvel_heros.push(dc_heros)
// console.log(allHeros1)

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

//spread operator: Broke array into elements and merge all elements

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)// merge into one array
// console.log(real_another_array);


// console.log(Array.isArray("sandhya")); // check array or not
// console.log(Array.from("sandhya")); // convert into array

// console.log(Array.from({name: "sandhya"})); //Important

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3));



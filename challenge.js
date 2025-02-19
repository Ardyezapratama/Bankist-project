"use strict";

/*
// NOTE: Challenge 1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
// My Solution
const checkDogs = function (dogsJulia, dogsKate) {
	const correctedDogsJulia = new Array(...dogsJulia);
	correctedDogsJulia.splice(0, 1);
	correctedDogsJulia.splice(-2);
	const dogsCombine = correctedDogsJulia.concat(dogsKate);
	dogsCombine.forEach(function (dog, idx) {
		dog >= 3
			? console.log(
					`Dog number ${idx + 1} is an adult, and is ${dog} years old`
			  )
			: console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
	});
};

console.log("----------Test data 1------------");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("----------Test data 2------------");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// NOTE: Challenge 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcHumanYears = function (dogAges) {
	const humanAges = dogAges.map((dogAge) =>
		dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
	);
	const adultDogs = humanAges.filter((age) => age >= 18);
	// const avrgAdultDogs = adultDogs.reduce((acc, curr) => acc + curr) / adultDogs.length;
	const averageAdultDogs = adultDogs.reduce(
		(acc, curr, i, arr) => acc + curr / arr.length,
		0
	);
	console.log(humanAges);
	console.log(adultDogs);
	console.log(averageAdultDogs);
};

calcHumanYears([5, 2, 4, 1, 15, 8, 3]);
calcHumanYears([16, 6, 10, 5, 6, 1, 4]);
*/

// NOTE: Challenge 3
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = (ages) =>
	ages
		.map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
		.filter((age) => age >= 18)
		.reduce((acc, age, idx, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

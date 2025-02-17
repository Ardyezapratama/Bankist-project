// NOTE: LECTURES

// const movements = [
// 	500000, 1500000, -1000000, 600000, -750000, -300000, 2500000,
// ];

///////////////////////////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "e"];

// NOTE: SLICE METHOD of array instance returns a shallow copy (copy properties share the same references) of a portion of an array into a new array object selected from start to  end (end not included);

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// NOTE: SPLICE METHOD of array instance change the contents of an array by removing or replacing exiting elements and/or adding new elements in place.

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// NOTE: REVERSE this method is mutating the original array
// NOTE: TOREVERSE this method is return new array with the elements in reversed order
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

// NOTE: Concat method merging two or more array, this method does not change the existing arrays but instead retruns new array
const arr3 = arr.concat(arr2);
console.log(arr3);

// NOTE: Join method creates and retruns a new string by concatening all of the elements in the array
console.log(arr3.join(" - "));
*/

// NOTE: Looping arrays forEach,

const movements = [
	500000, 1500000, -1000000, 600000, -750000, -300000, 2500000,
];

/*
// for of loops
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1} Yout deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1} Yout withdraw ${Math.abs(movement)}`);
	}
}

// forEach
console.log("-------- forEach ----------");
movements.forEach(function (movement, idx) {
	if (movement > 0) {
		console.log(`Movement ${idx + 1} You deposited ${movement}`);
	} else {
		console.log(`Movement ${idx + 1} You withdraw ${Math.abs(movement)}`);
	}
});

*/

/*
// NOTE: forEach with Maps and Sets

// Maps
const currencies = new Map([
	["IDR", "Indonesia rupiah"],
	["USD", "United State dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
	console.log(`${key}: ${value}`);
});

// Sets

const currenciesUnique = new Set(["IDR", "USD", "EUR", "GBP", "USD", "EUR"]);

currenciesUnique.forEach((value, _value, map) => {
	console.log(`${_value}: ${value}`);
});
*/

/*
// NOTE: Data transformation array method  map, filter and reduce

// map: returns a new array containing the result of applying on operation on all original array elements.
const euroToUsd = 1.03;

const movementsUsd = movements.map((mov) => mov * euroToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsUsdForOf = [];
for (const mov of movements) {
	movementsUsdForOf.push(mov * euroToUsd);
}

console.log(movementsUsdForOf);

const movementsDesc = movements.map(
	(mov, idx) =>
		`Movement ${idx + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
			mov
		)}`
);
console.log(movementsDesc);

// filter: returns a new array containing the array elements that passed specified test condition.
// reduce: boils all array elements down to one single value (e.g adding all elements together)
*/

/*
// NOTE: Filter Methods

// Deposits
const deposits = movements.filter(function (mov) {
	return mov > 0;
});

console.log(deposits);

// const depositFor = [];
// for (let mov of movements) {
// 	if (mov > 0) {
// 		depositFor.push(mov);
// 	}
// }
// console.log(depositFor);

// Witdrawals
const witdrawals = movements.filter((mov) => mov < 0);
console.log(witdrawals);
*/

/*
// NOTE: Reduce Methods
// const balance = movements.reduce(function (acc, curr, i, arr) {
// 	console.log(`Iteration ${i}: ${acc} + ${curr}`);
// 	return acc + curr;
// }, 0);

const balance = movements.reduce((acc, curr) => acc + curr);
console.log(balance);

let balance2 = 0;
for (let mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
	if (acc > mov) {
		return acc;
	} else {
		return mov;
	}
}, movements[0]);

console.log(max);
*/

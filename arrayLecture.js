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

/*
// NOTE: Chaining methods
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.03;

// PIPELINE
const totalDepositUsd = movements2
	.filter((mov) => mov > 0)
	.map((mov) => mov * euroToUsd)
	.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUsd);
*/

/*
// NOTE: find methods => only retreive first element that match the argument

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
*/

/*
// NOTE: findLast and findLastIndex method

console.log(movements);
const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithdrawal);

const lastIndexWithdrawal = movements.findLastIndex((mov) => mov < 0);
console.log(lastIndexWithdrawal);
*/

/*
// NOTE: some and every method

console.log(movements);
// includes method (Equality)
console.log(movements.includes(-300000));

// some method (Condition)
const anyDeposit = movements.some((mov) => mov > 2000000);
console.log(anyDeposit);

// every method
const everyDeposit = movements.every((mov) => mov > 0);
console.log(everyDeposit); // false becaouse all movements is not deposit

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
*/

/*
// NOTE: flat and flatMap method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat method
const flatArr = arr.flat();
console.log(flatArr);
const flatArrDeep = arrDeep.flat(2);
console.log(flatArrDeep);
*/

/*
// NOTE: Sorting array

// sort method (mutating original array)
// Strings
const owner = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owner.sort());
console.log(owner);

// Numbers
console.log(movements);

// returns < 0, A, B
// returns > 0, B, A

// Ascending
// movements.sort((a, b) => {
// 	if (a > b) return 1;
// 	if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
// 	if (a > b) return -1;
// 	if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
// NOTE: Array grouping
console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
	movement > 0 ? "deposit" : "withdrawals"
);

console.log(groupedMovements);
*/
// NOTE: Data
const account_1 = {
	owner: "Eza Pratama",
	movements: [500000, 1500000, -1000000, 600000, -750000, -300000, 2500000],
	interestRate: 1.2, // in %
	pin: 123456,
	type: "premium",
};

const account_2 = {
	owner: "Jessica Davis",
	movements: [
		8000000, 3500000, -1500000, -4300000, -500000, -1700000, 10000000, -5000000,
	],
	interestRate: 1.5,
	pin: 2222,
	type: "standard",
};

const account_3 = {
	owner: "Steven Thomas Williams",
	movements: [
		3500000, -3500000, 5800000, -5000000, -340000, 850000, 6800000, -7800000,
	],
	interestRate: 0.7,
	pin: 3333,
	type: "premium",
};

const account_4 = {
	owner: "Sarah Smith",
	movements: [7300000, 17000000],
	interestRate: 1,
	pin: 4444,
	type: "basic",
};

const account_s = [account_1, account_2, account_3, account_4];
/*
const groupedByActivity = Object.groupBy(account_s, (account) => {
	const movementCount = account.movements.length;

	if (movementCount >= 8) return "very active";
	if (movementCount >= 4) return "active";
	if (movementCount >= 1) return "moderate";
});

console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(account_s, ({ type }) => type);
console.log(groupedAccounts);

*/

/*
// NOTE: More ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 5);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, () => Math.floor(Math.random() * 6) + 1);
console.log(z);
*/

/*
// NOTE: Non-destructive alternative: toReversed, toSorted, toSpliced, toMapped, toFiltered, toReduced, toFinded, toSome, toEvery, toFlat, toSorted, toFilled, toFromed

// toReversed (reverse)
console.log(movements);
console.log("=".repeat(35) + "toReversed" + "=".repeat(35));
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

// toSorted (sort)
console.log("=".repeat(35) + "toSorted" + "=".repeat(35));
const sortedMov = movements.toSorted((a, b) => a - b);
console.log(sortedMov);
console.log(movements);

// toSpliced (splice)
console.log("=".repeat(35) + "toSpliced" + "=".repeat(35));
const splicedMov = movements.toSpliced(2);
console.log(splicedMov);
console.log(movements);

// with
console.log("=".repeat(35) + "with" + "=".repeat(35));
const newMov = movements.with(1, 1250000);
console.log(newMov);
console.log(movements);
*/

/*
// Manual using for loop
function positiveSumFor(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			result += arr[i];
		}
	}
	return result;
}

console.log(positiveSumFor([1, -4, 7, 12])); // 20

// Chaining
function positiveSum(arr) {
	return arr.filter((num) => num > 0).reduce((a, b) => a + b);
}
*/

// Lectures Arry.from
/*
labelBalance.addEventListener("click", function () {
	const movementsUI = Array.from(
		document.querySelectorAll(".movements__value"),
		(el) => Number(el.textContent.replace("Rp. ", ""))
	);

	console.log(movementsUI);

	const movementsUI2 = [...document.querySelectorAll(".movements__value")];

	console.log(
		movementsUI2.map((el) => Number(el.textContent.replace("Rp. ", "")))
	);
});
*/

// More Array Methods Practice
console.log(accounts.flatMap((acc) => acc.movements));
// 1
const bankDepositSum = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov > 0)
	.reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2
console.log(
	accounts.flatMap((acc) => acc.movements).filter((mov) => mov >= 2000000)
);
// using filter
const numDeposits2000000 = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov >= 2000000).length;

console.log(numDeposits2000000);

// using reduce
const numDepositsReduce = accounts
	.flatMap((acc) => acc.movements)
	// .reduce((acc, mov) => (mov >= 2000000 ? acc + 1 : acc), 0);
	.reduce((acc, mov) => (mov >= 2000000 ? ++acc : acc), 0);
console.log(numDepositsReduce);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3
const { deposits, withdrawals } = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(sums, cur) => {
			// cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
			sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
			return sums;
		},
		{ deposits: 0, withdrawals: 0 }
	);

console.log(deposits, withdrawals);

// 4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
	const exception = ["a", "an", "the", "but", "or", "on", "in", "with"];
	const titleCase = title
		.toLowerCase()
		.split(" ")
		.map((word) => (exception.includes(word) ? word : capitalize(word)))
		.join(" ");
	return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

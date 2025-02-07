// NOTE: Data
const account1 = {
	owner: "Eza Pratama",
	movements: [500000, 1500000, -1000000, 600000, -750000, -300000, 2500000],
	interestRate: 1.2, // in %
	pin: 123456,
	type: "premium",
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
	type: "standard",
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
	type: "premium",
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
	type: "basic",
};

const accounts = [account1, account2, account3, account4];

// NOTE: Selected Elements

// label elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__label--in");
const labelSumOut = document.querySelector(".summery__label--out");
const labeSumInterest = document.querySelector(".summery__label--interest");
const labelTimer = document.querySelector(".timer");

// container elements
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// btn elements
const loginBtn = document.querySelector(".login__btn");
const transferBtn = document.querySelector(".form__btn--transfer");
const loanBtn = document.querySelector(".form__btn--loan");
const closeAccBtn = document.querySelector(".form__btn--close");
const sortBtn = document.querySelector(".btn--sort");

// input elements
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPass = document.querySelector(".login__input--pin");
const inputTranferTo = document.querySelector(".form__input--to");
const inputTranferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// NOTE: LECTURES

const currencies = new Map([
	["IDR", "Indonesia rupiah"],
	["USD", "United State dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

const movements = [
	500000, 1500000, -1000000, 600000, -750000, -300000, 2500000,
];

///////////////////////////////////////////////////////////////////////

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

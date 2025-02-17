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

const displayMovements = function (movements) {
	containerMovements.innerHTML = "";
	movements.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";
		const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
				<div class="movements__value">Rp. ${mov}</div>
			</div>
		`;
		// insertAdjacentHTML is method of hte element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified postition.
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
	const balance = movements.reduce((acc, curr) => acc + curr, 0);
	labelBalance.textContent = `Rp. ${balance}`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLocaleLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};

createUsernames(accounts);

console.log(accounts);

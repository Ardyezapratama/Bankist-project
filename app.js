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
	movements: [
		8000000, 3500000, -1500000, -4300000, -500000, -1700000, 10000000, -5000000,
	],
	interestRate: 1.5,
	pin: 2222,
	type: "standard",
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [
		3500000, -3500000, 5800000, -5000000, -340000, 850000, 6800000, -7800000,
	],
	interestRate: 0.7,
	pin: 3333,
	type: "premium",
};

const account4 = {
	owner: "Sarah Smith",
	movements: [7300000, 17000000, 5300000, 750000, 900000],
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
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labeSumInterest = document.querySelector(".summary__value--interest");
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

/*
// NOTE: all accounts balance
// 1
const overalBalance = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// 2
const overalBalance2 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/

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

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
	labelBalance.textContent = `Rp. ${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);

	const outcomes = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);

	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((interest, idx, arr) => interest >= 14000)
		.reduce((acc, interest) => acc + interest, 0);

	labelSumIn.textContent = `Rp. ${incomes}`;
	labelSumOut.textContent = `Rp. ${Math.abs(outcomes)}`;
	labeSumInterest.textContent = `Rp. ${interest}`;
};

// NOTE: Create username
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

// NOTE: Function display UI
const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);
	// Display balance
	calcDisplayBalance(acc);
	// Display summary
	calcDisplaySummary(acc);
};

// NOTE: Login event handler
let currentAccount;
loginBtn.addEventListener("click", function (e) {
	// Prevent form submitting
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);
	if (currentAccount?.pin === Number(inputLoginPass.value)) {
		// Display UI and Message
		labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(" ")[0]}`;

		// Display app container
		containerApp.style.opacity = 100;

		// Clear login input fields
		inputLoginUsername.value = inputLoginPass.value = "";
		inputLoginPass.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

// Implementing transfers
transferBtn.addEventListener("click", function (e) {
	e.preventDefault();

	// amount to transfer
	const amount = Number(inputTranferAmount.value);
	// User Receiver
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTranferTo.value
	);

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfers
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Update UI
		updateUI(currentAccount);

		//Clear transfer input fields
		inputTranferTo.value = inputTranferAmount.value = "";
		inputTranferAmount.blur();
	}
});

// Implementing loan
loanBtn.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		// Add movement
		currentAccount.movements.push(amount);

		// Update UI
		updateUI(currentAccount);

		// Clear load input fields
		inputLoanAmount.value = "";
		inputLoanAmount.blur();
	}
});

// Implementing close account
closeAccBtn.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);
		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;

		// Clear login input fields
		inputCloseUsername.value = inputClosePin.value = "";
		inputClosePin.blur();
	}
});

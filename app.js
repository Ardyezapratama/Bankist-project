// NOTE: Data
const account1 = {
  owner: "Eza Pratama",
  movements: [500000, 1500000, -1000000, 600000, -750000, -300000, 2500000],
  interestRate: 1.2, // in %
  pin: 123456,
  type: "premium",
  movementsDates: [
    "2024-10-18T21:31:17.178Z",
    "2024-11-23T07:42:02.383Z",
    "2024-11-28T09:15:04.904Z",
    "2024-12-01T10:17:24.185Z",
    "2024-12-08T14:11:59.604Z",
    "2025-01-05T17:01:17.194Z",
    "2025-02-25T23:36:17.929Z",
  ],
  currency: "IDR",
  locale: "id-ID",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [
    8000000, 3500000, -1500000, -4300000, -500000, -1700000, 10000000, -5000000,
  ],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
  movementsDates: [
    "2024-10-18T21:31:17.178Z",
    "2024-11-23T07:42:02.383Z",
    "2024-11-28T09:15:04.904Z",
    "2024-12-01T10:17:24.185Z",
    "2024-12-08T14:11:59.604Z",
    "2025-01-05T17:01:17.194Z",
    "2025-02-25T23:36:17.929Z",
    "2025-02-28T10:51:36.790Z",
  ],
  currency: "IDR",
  locale: "id-ID",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [
    3500000, -3500000, 5800000, -5000000, -340000, 850000, 6800000, -7800000,
  ],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
  movementsDates: [
    "2024-10-18T21:31:17.178Z",
    "2024-11-23T07:42:02.383Z",
    "2024-11-28T09:15:04.904Z",
    "2024-12-01T10:17:24.185Z",
    "2024-12-08T14:11:59.604Z",
    "2025-01-05T17:01:17.194Z",
    "2025-02-25T23:36:17.929Z",
    "2025-02-28T10:51:36.790Z",
  ],
  currency: "IDR",
  locale: "id-ID",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [7300000, 17000000, 5300000, 750000, 900000],
  interestRate: 1,
  pin: 4444,
  type: "basic",
  movementsDates: [
    "2024-10-18T21:31:17.178Z",
    "2024-11-23T07:42:02.383Z",
    "2024-11-28T09:15:04.904Z",
    "2024-12-01T10:17:24.185Z",
    "2024-12-08T14:11:59.604Z",
    "2025-01-05T17:01:17.194Z",
  ],
  currency: "IDR",
  locale: "id-ID",
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
// NOTE: movement date
const formatMovementDate = function (date, locale) {
  const calcPassedDay = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcPassedDay(new Date(), date);

  if (dayPassed === 0) return "Today";
  if (dayPassed === 1) return "Yesterday";
  if (dayPassed <= 7) return `${dayPassed} day ago`;

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

// NOTE: formater currency

// NOTE: Display Movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  // Sorting the movements
  // const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  const combainedMovs = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates[i],
    currency: acc.currency,
    locale: acc.locale,
  }));
  if (sort) combainedMovs.sort((a, b) => a.movement - b.movement);

  combainedMovs.forEach(function (obj, i) {
    const { movement, movementDate, currency, locale } = obj;
    const type = movement > 0 ? "deposit" : "withdrawal";
    const date = new Date(movementDate);
    const formatedDate = formatMovementDate(date, locale);
    const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
				<div class="date"> ${formatedDate} </div>
				<div class="movements__value">Rp. ${movement}</div>
			</div>
		`;
    // insertAdjacentHTML is method of hte element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified postition.
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// NOTE: Calculate and display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `Rp. ${acc.balance}`;
};

// NOTE: Calculate and display summary
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
  displayMovements(acc);
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
    (acc) => acc.username === inputLoginUsername.value,
  );
  if (currentAccount?.pin === Number(inputLoginPass.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(" ")[0]}`;

    // Display app container
    containerApp.style.opacity = 100;

    // Clear login input fields
    inputLoginUsername.value = inputLoginPass.value = "";
    inputLoginPass.blur();

    const currDate = () => {
      const date = new Date();
      options = {
        second: "2-digit",
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };

      labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(
        date,
      );
    };

    currDate();
    setInterval(currDate, 1000);

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
    (acc) => acc.username === inputTranferTo.value,
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

    // add date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

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
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add current date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);

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
      (acc) => acc.username === currentAccount.username,
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

// NOTE: Button sort handling
let sorted = false;
sortBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

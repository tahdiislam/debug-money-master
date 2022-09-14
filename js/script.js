const calculateexpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > parseInt(income) || !expense || isNaN(expense) || !balance || isNaN(balance)) {
    alert("Please type valid amount that you your income can manage");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const balance = document.getElementById("balance").innerText;
  const savingAmount = (savePercentage / 100) * balance;

  // calculate remaining balance
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance || !!isNaN(savingAmount) || !savingAmount){
    alert("Please type a valid amount");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};

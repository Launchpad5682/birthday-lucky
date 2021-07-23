let dateInput = document.getElementById("date-input");
let luckyNumber = document.getElementById("lucky-number");
let submitBtn = document.getElementById("submit-btn");
let output = document.getElementById("output-msg");

const currentDate = new Date();

submitBtn.addEventListener("click", submitData);

function submitData() {
  let date = dateInput.value;
  let lucky = luckyNumber.value;

  //   console.log(date);
  //   console.log(lucky);

  if (date === "" || lucky === "") {
    alert("Please enter the data correctly");
  } else {
    const dateInt = parseInt(date.replaceAll("-", ""));
    checkLucky(dateInt, lucky);
  }

  // erase the input
  dateInput.value = null;
  luckyNumber.value = null;
}

function checkLucky(date, lucky) {
  let sum = 0;
  //   console.log(date);
  while (date > 0) {
    let lastDigit = date % 10;
    sum = sum + lastDigit;
    date = Math.floor(date / 10);
  }

  let sumOfDigits = parseInt(sum);
  //   console.log(sumOfDigits);
  //   console.log(sumOfDigits % parseInt(lucky));
  if (sumOfDigits % parseInt(lucky) == 0) {
    output.innerText = "Congratulations, your Birthday is a Lucky day!💯🎉";
  } else {
    output.innerText = "Sorry, your birthday is not a lucky day!😉🤗";
  }
}

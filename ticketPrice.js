let age = prompt("Please Enter Your Age:");
age = Number(age);

let result;
if (isNaN(age) || age <= 0) {
  result = "Hey Enter a Valid Age🤬";
} else if (age <= 12) {
  result = "You'll Pay $10😒";
} else if (age > 12 && age < 18) {
  result = "You'll Pay $15😑";
} else if (age >= 18) {
  result = "You'll Pay $20😃";
}

let price = document.getElementById("price");
price.textContent = result;

let temp = prompt("What Is The Temperature Right Now");
temp = Number(temp);
const rain = prompt("Is It Raining Right Now (y/n)");

let advice;
if (temp >= 18 && rain == "y") advice = "Wear a Short And Take Your Umbrella";
else if (temp >= 18 && rain == "n")
  advice = "Wear A T-shirt And Enjoy Your Day";
else if (temp > 0 && rain == "y")
  advice = "Wear Your Coat And Gloves And Don't Forget Your Umbrella";
else if (temp > 0 && rain == "n")
  advice = "Wear Your Coat And Gloves And No Need For Umbrella";
else if ((temp <= 0 && rain == "y") || rain == "n")
  advice = "It's Very Cold Weather The Snow Falls With a Freezy Wind";
else advice = "Plese Fill All The Fields To Get An Advice";

let myAdvice = document.getElementById("myAdvice");
myAdvice.textContent = advice;

document.getElementById("apply").addEventListener("click", function () {
  let input = inputValue("cupon");
  let fee = valueinnerText("total-fee");
  let discount = 30;
  validation(fee, input, discount);
});

//Register
let register = document.getElementById("registration");
register.addEventListener("click", function () {
  let fee = valueinnerText("discount-fee");

  validation2(fee);
});

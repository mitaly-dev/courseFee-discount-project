function valueinnerText(id) {
  let textElement = document.getElementById(id);
  let textValue = textElement.innerText;
  return (textValue = parseInt(textValue));
}
function setCourseFee(id, total) {
  let textElement = document.getElementById(id);
  textElement.innerText = total;
}
function inputValue(id) {
  let inputElement = document.getElementById(id);
  let inputValue = inputElement.value;
  inputElement.value = "";
  return inputValue;
}

function discountFee(total, discount) {
  let discountPrice = (total * discount) / 100;
  let afterPrice = total - discountPrice;
  afterPrice = parseInt(afterPrice);
  return afterPrice;
}

//validation
function validation(fee, input, discount) {
  if (isNaN(fee)) {
    alert("Select one course");
  } else if (input == "DOM") {
    let afterDiscount = discountFee(fee, discount);
    setCourseFee("discount-fee", afterDiscount);
  } else {
    alert("Please provide us a valid discount code");
  }
}

//validation 2
function validation2(fee) {
  if (isNaN(fee)) {
    return alert("Please select one course");
  } else {
    let msg = document.getElementById("msg");
    msg.innerText = " Registration Successfully ✔️";
    setTimeout(() => {
      msg.innerText = "";
    }, 3000);
    setCourseFee("discount-fee", `${fee} Successfull`);
    register.setAttribute("disabled", true);
  }
}

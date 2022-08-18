document.getElementById("design").addEventListener("click", function () {
  let courseFee = valueinnerText("design-fee");
  setCourseFee("total-fee", courseFee);
  setCourseFee("discount-fee", courseFee);
});
document.getElementById("development").addEventListener("click", function () {
  let devcourseFee = valueinnerText("development-fee");
  setCourseFee("total-fee", devcourseFee);
  setCourseFee("discount-fee", devcourseFee);
});

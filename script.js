var dateDiffInDays = function (dateOne, dateTwo) {
  //   write your code here

	return (Date.UTC(dateOne)-Date.UTC(dateTwo));
}
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

var dateDiffInDays = function (date1, date2) {
  //   write your code here
	dateOne=Date.UTC(date1);
	dateTwo=Date.UTC(date2);
	return (dateOne-dateTwo);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

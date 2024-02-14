var dateDiffInDays = function (date1, date2) {

 
  var date1 = Date.parse(dateOne);
  var date2 = Date.parse(dateTwo);

 

  var diffInMilliseconds = (date2 - date1);	

 
  var diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  return diffInDays;
}
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

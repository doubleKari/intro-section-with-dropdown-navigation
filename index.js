let today = new Date();
let month = today.getMonth() + 1;
let actual = "";
switch (month) {
  case 1:
    actual = "January";
    break;
  case 2:
    actual = "February";
    break;
  case 3:
    actual = "March";
    break;
  case 4:
    actual = "April";
    break;
  case 5:
    actual = "May";
    break;
  case 6:
    actual = "June";
    break;
  case 7:
    actual = "July";
    break;
  case 8:
    actual = "August";
    break;
  case 9:
    actual = "September";
    break;
  case 10:
    actual = "October";
    break;
  case 11:
    actual = "November";
    break;
  default:
    actual = "December";
}

let date = `${today.getDate()}th ${actual} ${today.getFullYear()}`;
console.log(date);

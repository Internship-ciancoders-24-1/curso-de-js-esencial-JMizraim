function daysBetweenDates(date1, date2) {
  return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

const today = new Date();
const birthDate = new Date("1995-12-17");

console.log(daysBetweenDates(birthDate, today));

function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greetings(date) {
	return `Hello, world! Happy eurk ${dayName(now)}.`
}
const ageCalculator = require('age-calculator')
const getAge = (DOB) => {
    const ageFromString = new ageCalculator.AgeFromDateString(DOB).age;
    return ageFromString
}

console.log(getAge('1990/06/26'))
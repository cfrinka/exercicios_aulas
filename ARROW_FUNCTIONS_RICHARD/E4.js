const toCelsius = (graus) => (graus - 32) / 1.8

const temp = toCelsius(90)
const text = `A temperatura é ${temp}`

console.log(text)
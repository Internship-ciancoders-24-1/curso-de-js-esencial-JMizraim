let count = 0

const rain = () => Math.random() < 0.25

do {
    count++
} while (!rain())

console.log(`I had to wait ${count} days for it to rain`)
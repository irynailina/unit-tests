function expect (value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('success')
            } else {
                console.log(`Value is ${value}, but expectation is ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b;
const nativeNull = () => null;

module.exports = {sum, nativeNull}

// console.log(sum(4,1));
// expect(sum(41,1)).toBe(21);
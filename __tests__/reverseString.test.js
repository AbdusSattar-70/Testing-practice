const reverseString = require('../reverseString');

test('reverse string', () => {
expect (reverseString('rattas')).toBe('sattar');
})

module.exports = reverseString;
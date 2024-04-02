// Function for adding two strings representing numbers
String.prototype.plus = function(str) {
    let result = '';
    let carry = 0;
    let i = this.length - 1;
    let j = str.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(this[i]) : 0;
        const digit2 = j >= 0 ? parseInt(str[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
};

// Function for subtracting two strings representing numbers
String.prototype.minus = function(str) {
    let result = '';
    let borrow = 0;
    let i = this.length - 1;
    let j = str.length - 1;

    while (i >= 0) {
        const digit1 = parseInt(this[i]);
        const digit2 = j >= 0 ? parseInt(str[j]) : 0;
        const diff = digit1 - digit2 - borrow;
        borrow = diff < 0 ? 1 : 0;
        result = (diff >= 0 ? diff : diff + 10) + result;
        i--;
        j--;
    }

    return result.replace(/^0+/, '') || '0';
};

// Function for multiplying two strings representing numbers
String.prototype.multiply = function(str) {
    let result = '0';

    for (let i = this.length - 1; i >= 0; i--) {
        let tempResult = '';
        let carry = 0;

        for (let j = str.length - 1; j >= 0; j--) {
            const product = parseInt(this[i]) * parseInt(str[j]) + carry;
            tempResult = (product % 10) + tempResult;
            carry = Math.floor(product / 10);
        }

        if (carry > 0) {
            tempResult = carry + tempResult;
        }

        tempResult += '0'.repeat(this.length - 1 - i);
        result = result.plus(tempResult);
    }

    return result;
};

// Function for dividing two strings representing numbers
String.prototype.divide = function(str) {
    let dividend = this;
    let divisor = str;
    let quotient = '';

    while (dividend.length >= divisor.length && dividend >= divisor) {
        let currentQuotient = '0';
        let currentDivisor = divisor;

        while (dividend >= currentDivisor) {
            dividend = dividend.minus(currentDivisor);
            currentQuotient = (parseInt(currentQuotient) + 1).toString();
            currentDivisor = (parseInt(currentDivisor) + parseInt(divisor)).toString();
        }

        quotient = quotient.plus(currentQuotient);
    }

    return quotient;
};

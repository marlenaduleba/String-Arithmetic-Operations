// Function for adding two strings representing numbers
String.prototype.plus = function (str) {
  let result = "";
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
String.prototype.minus = function (str) {
  let result = "";
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

  return result.replace(/^0+/, "") || "0";
};

// Function for multiplying two strings representing numbers
String.prototype.multiply = function (str) {
  if (this === "0" || str === "0") return "0"; // If any operand is 0, the result will be 0

  let result = "0";

  for (let i = this.length - 1; i >= 0; i--) {
    let tempResult = "";
    let carry = 0;

    for (let j = str.length - 1; j >= 0; j--) {
      const product = parseInt(this[i]) * parseInt(str[j]) + carry;
      tempResult = (product % 10) + tempResult;
      carry = Math.floor(product / 10);
    }

    if (carry > 0) {
      tempResult = carry + tempResult;
    }

    tempResult += "0".repeat(this.length - 1 - i);
    result = result.plus(tempResult);
  }

  return result;
};

// Function for dividing two strings representing numbers
String.prototype.divide = function(divisor) {
    // Remove leading zeros
    let dividend = this.replace(/^0+/, "");
    divisor = divisor.replace(/^0+/, "");

    // Check for division by zero
    if (divisor === "0") throw new Error("Division by zero");

    // Initialize quotient and remainder
    let quotient = "";
    let remainder = "";

    for (let i = 0; i < dividend.length; i++) {
        // Append next digit to remainder
        remainder += dividend[i];

        // Check if current remainder is greater than or equal to divisor
        if (parseInt(remainder) >= parseInt(divisor)) {
            // Find the largest multiple of divisor that fits into the current remainder
            let multiplier = Math.floor(parseInt(remainder) / parseInt(divisor));

            // Update quotient and remainder
            quotient += multiplier.toString();
            remainder = (parseInt(remainder) - multiplier * parseInt(divisor)).toString();
        } else {
            // If the remainder is less than the divisor, append "0" to the quotient
            quotient += "0";
        }
    }

    // Remove leading zeros from quotient
    quotient = quotient.replace(/^0+/, "");

    return quotient === "" ? "0" : quotient;
};



module.exports = {
  plus: String.prototype.plus,
  minus: String.prototype.minus,
  multiply: String.prototype.multiply,
  divide: String.prototype.divide,
};

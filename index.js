export const multiplyTwoNumbers = (a, b) => {
    return a * b;
}

export const getMaxNumber = (a, b) => {
    return Math.max(a, b);
}

export const castReversedBoolean = (value) => {
    return !Boolean(value);
}

export const determineEntrance = (num) => {
    if (num >= 1 && num <= 20) {
        return 1;
      } else if (num >= 21 && num <= 48) {
        return 2;
      } else if (num >= 49 && num <= 90) {
        return 3;
      }
      return 0;
}

export const getSum = (num) => {
    return num
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
}
import * as React from 'react';
import './style.css';

export default function App() {
  function fib(start, end) {
    let fibArr = [0, 1];
    for (let i = 2; i <= end; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr.slice(start, end + 1);
  }

  const findFibonacciCombination = (num) => {
    const fibNums = fib(0, num);
    let remainder = num;
    const combination = [];
    for (let i = fibNums.length - 1; i >= 0; i--) {
      const fibNum = fibNums[i];
      if (fibNum <= remainder) {
        remainder -= fibNum;
        combination.push(fibNum);
      }
      if (remainder === 0) {
        break;
      }
    }
    return combination;
  };
  const stringToNumber = (str) => {
    const numbers = str
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          return code - 96;
        } else if (code >= 48 && code <= 57) {
          return parseInt(char) + 26;
        } else {
          return '';
        }
      })
      .join('');
    return numbers;
  };
  const numberToString = (numStr) => {
    const numbers = numStr.toString().split('');
    const letters = numbers.map((num) =>
      String.fromCharCode(parseInt(num) + 96)
    );
    return letters.join('');
  };
  const textOrigin = 'abcd';
  const number = stringToNumber(textOrigin);
  const key = findFibonacciCombination(number).reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const textResult = numberToString(key);

  return (
    <div>
      <p>
        {' '}
        {JSON.stringify(textOrigin)}correspond to{' '}
        {JSON.stringify(stringToNumber(textOrigin))}{' '}
      </p>
      <p>
        this:{JSON.stringify(findFibonacciCombination(number))} ={' '}
        {JSON.stringify(number)}
      </p>
      <p>{JSON.stringify(key)}</p>
      <p>{JSON.stringify(textResult)}</p>
    </div>
  );
}

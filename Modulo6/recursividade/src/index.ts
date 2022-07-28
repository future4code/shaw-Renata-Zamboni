//1
//a - imprima todos os inteiros de 0 até esse número no console em ordem crescente
const printNumbersA = (n: number) => {
    if (n >= 0) {
      printNumbersA(n - 1);
      console.log(n);
    }
};

//b - imprima todos os inteiros desse número até 0 em ordem decrescente
const printNumbersB = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbersB(n - 1);
    }
};

//2 calcule a soma dos números inteiros de 0 a n
export const Sum = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return Sum(n - 1, acc + n);
};

console.log(Sum(5));

//3 - =2, mas função iterativa
export const calculateSum = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
};
      
console.log(calculateSum(7));

//4 - função recursiva que consiga imprimir todos os elementos de um array
export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
};
  
const array = [1, 2, 3, 4];
printArray(array);

//5 - função recursiva que determine a quantidade de digitos de um número
export const getNumDigits = (num: number, acc: number = 1): number => {
    if (num < 10) {
      return acc;
    }
    return getNumDigits(num / 10, acc + 1);
};

console.log(getNumDigits(5));
console.log(getNumDigits(7));

//6 - função recursiva que determine o maior valor de um array que contenha somente números positivos 
export const getArrayMaximum = (
    arr: number[],
    i: number = 0,
    largest: number = 0
  ): number => {
    let largestAux = largest;
    if (arr[i] > largest) {
      largestAux = arr[i];
    }
    if (i === arr.length - 1) {
      return largestAux;
    }
  
    return getArrayMaximum(arr, i + 1, largestAux);
};
  
console.log(getArrayMaximum([2, 10, 8, 5, 4]));

//7 - função recursiva que determine o primeiro caractere maiúsculo de uma string
export const findFirstCapitalLetter = (
    s: string,
    char: string = ""
  ): string => {
    if (char && char.toUpperCase() === char) {
      return char;
    }
    return findFirstCapitalLetter(s.substring(1), s[0]);
};





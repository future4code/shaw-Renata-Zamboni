export const findUniqueNumber = (arr: number[]): number => {
    const expectedNum = Object.create(null);  
      
    for (const element of arr) {
     expectedNum[element] = (expectedNum[element] || 0) + 1;    
    };
    return expectedNum
  }
  
  let array = [10, 11, 3, 20, 5, 10, 11, 3, 20];
  console.log(findUniqueNumber(array))
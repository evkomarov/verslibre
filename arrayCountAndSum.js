function countPositivesSumNegatives(input) {
    // выбираем только положительные числа в отдельный массив и считаем их кол-во по длине массива
    let positivesCount = input.filter(i => i > 0).length;
    // выбираем отрицательные числа и методом REDUCE получаем их сумму
    let negativesSum = input.filter(j => j < 0).reduce((acc, el) => {return acc + el;}, 0); 
    
    let result = [];
    //добавляем полученные результаты в новый массив
    result.push(positivesCount, negativesSum);
    console.log(result);
  
  }
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
  countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
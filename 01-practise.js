// =============================================
// Pagalbinės funkcijos
// =============================================
const startTask = (num) => {
    console.log(`=`.repeat(45));
    console.log(`Užduotis Nr. ${num}`);
    console.log(`=`.repeat(45));
    console.log();
}

const endTask = () => {
    console.log();
    console.log(`=`.repeat(45));
    console.log(`\n`.repeat(4));
}




// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
const numbers1 = [1, 2, 3, 4, 5];

startTask(1);

// Sprendimas su for ciklu:
const numbers1_for = (arr) => {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum;
}
console.log(`Sprendimas su for ciklu: ${numbers1_for(numbers1)}`);


// Sprendimas su array metodu (reduce):
const numbers1_reduce = (arr) => {
    return arr.reduce((counter, num) => counter + num, 0);
}
console.log(`Sprendimas su array metodu (reduce): ${numbers1_reduce(numbers1)}`);

endTask();



// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];

startTask(2);

// Sprendimas su for ciklu:
const numbers2_for = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) counter++;
    }
    return counter;
}
console.log(`Sprendimas su for ciklu: ${numbers2_for(numbers2)}`); 
 

// Sprendimas su filter metodu:
const numbers2_filter = (arr) => {
    return arr.filter((num) => num % 2 === 0).length;
}
console.log(`Sprendimas su array metody (filter): ${numbers2_filter(numbers2)}`); 

endTask();
 



// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];
 
startTask(3);

// Sprendimas su for ciklu:
const numbers3_for = (arr) => {
    let biggest = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) biggest = arr[i];
    }

    return biggest;
}
console.log(`Sprendimas su for ciklu: ${numbers3_for(numbers3)}`);
 

// Sprendimas su Math.max ir spread operator:
const numbers3_mathMax = (arr) => {
    return Math.max(...arr);
}

console.log(`Sprendimas su Math.max ir spread operator: ${numbers3_mathMax(numbers3)}`); 
 
endTask();




// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
 
startTask(4);

// Sprendimas su for ciklu:
const numbers4_for = (arr, target) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) counter++;
    }

    return counter;
}
console.log(`Sprendimas su for ciklu: ${numbers4_for(numbers4, target)}`);
 
 
// Sprendimas su filter metodu:
const numbers4_filter = (arr, target) => {
    return arr.filter((num) => num === target).length;
}
console.log(`Sprendimas su filter metodu: ${numbers4_filter(numbers4, target)}`); 
 
endTask();




// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
const numbers5 = [-3, 0, 5, -1, 8, -2];
 
startTask(5);

// Sprendimas su for ciklu:
const numbers5_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) newArr.push(arr[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${numbers5_for(numbers5)}`);


// Sprendimas su filter metodu:
const numbers5_filter = (arr) => {
    return arr.filter((num) => num > 0);
}
console.log(`Sprendimas su filter metodu: ${numbers5_filter(numbers5)}`); 

endTask();



 
// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];
 
startTask(6);

// Sprendimas su for ciklu:
const numbers6_for = (arr) => {
    let result = null;

    for (let i = 0; i < arr.length; i++) {
        if (result === null) {
            result = arr[i];
            continue;
        }
        result = result * arr[i];
    }

    return result;
}
console.log(`Sprendimas su for ciklu: ${numbers6_for(numbers6)}`); 
 

// Sprendimas su reduce metodu:
const numbers6_reduce = (arr) => {
    return arr.reduce((result, num) => result * num, 0);
}
console.log(`Sprendimas su reduce metodu: ${numbers6_reduce(numbers6)}`); 
 
endTask();




// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];
 
startTask(7);

// Sprendimas su for ciklu:
const array7_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${array7_for(array7)}`);

 
// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
const array7_reverse = (arr) => {
    return arr.reverse();
}
console.log(`Sprendimas su reverse metodu: ${array7_reverse(array7)}`);

endTask();


 
 
// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
const array8 = ['a', 'b', 'c', 'd'];
const searchElement = 'c';

startTask(8);
 
// Sprendimas su for ciklu:
const array8_for = (arr, searchElement) => {
    let index = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            index = i;
            break;
        }
    }

    return index;
}
console.log(`Sprendimas su for ciklu: ${array8_for(array8, searchElement)}`);
 

// Sprendimas su indexOf metodu:
const array8_indexOf = (arr, searchElement) => {
    return arr.indexOf(searchElement);
}
console.log(`Sprendimas su indexOf metodu : ${array8_indexOf(array8, searchElement)}`);

endTask();


 
 
// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
const array9 = [1, 3, 5, 7, 9];
 
startTask(9);

// Sprendimas su for ciklu:
const array9_for = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }

    return true;
}
console.log(`Sprendimas su for ciklu: ${array9_for(array9)}`);
 

// Sprendimas su every metodu:
const array9_every = (arr) => {
    return arr.every((num, i) => i === 0 || num >= arr[i - 1]);
}
console.log(`Sprendimas su every metodu: ${array9_every(array9)}`);
 
endTask();



 
// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];

startTask(10);
 
// Sprendimas su for ciklu:
const numbers10_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${numbers10_for(numbers10)}`);
 

// Sprendimas su map metodu:
const numbers10_map = (arr) => {
    return arr.map((num) => num ** 2);
}
console.log(`Sprendimas su map metodu: ${numbers10_map(numbers10)}`);
 
endTask();



 
// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];

startTask(11);
 
// Sprendimas su for ciklu:
const numbers11_for = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) sum += arr[i];
    }

    return sum;
}
console.log(`Sprendimas su for ciklu: ${numbers11_for(numbers11)}`);

 
// Sprendimas su filter ir reduce:
const numbers11_filterReduce = (arr) => {
    return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(`Sprendimas su filter ir reduce metodais: ${numbers11_filterReduce(numbers11)}`);
 
endTask();



 
// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];

startTask(12);
 
// Sprendimas su for ciklu:
const numbers12_for = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return (sum / arr.length).toFixed(2);
}
console.log(`Sprendimas su for ciklu: ${numbers12_for(numbers12)}`);
 
 
// Sprendimas su reduce:
const numbers12_reduce = (arr) => {
    return (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2);
}
console.log(`Sprendimas su reduce metodu: ${numbers12_reduce(numbers12)}`);
 
endTask();
 
// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];

startTask(13);
 
// Sprendimas su for ciklu:
const numbers13_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${numbers13_for(numbers13)}`);

 
// Sprendimas su Set:
const numbers13_set = (arr) => {
    return [... new Set(arr)];
}
console.log(`Sprendimas su Set: ${numbers13_set(numbers13)}`);

endTask();


 
 
// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
const numbers14 = [5, 3, 9, 1, 7];

startTask(14);
 
// Sprendimas su for ciklu:
const numbers14_for = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] < largest) secondLargest = arr[i];
    }

    return secondLargest;
}
console.log(`Sprendimas su for ciklu: ${numbers14_for(numbers14)}`);
 

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
const numbers14_sort = (arr) => {
    return arr.sort((a, b) => b - a)[1];
}
console.log(`Sprendimas su sort metodu: ${numbers14_sort(numbers14)}`);

endTask();


 
 
// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;

startTask(15);
 
// Sprendimas su for ciklu:
const numbers15_for = (arr, t) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > t) result++;
    }

    return result;
}
console.log(`Sprendimas su for ciklu: ${numbers15_for(numbers15, threshold)}`);
 
 
// Sprendimas su filter:
const numbers15_filter = (arr, t) => {
    return arr.filter((n) => n > t).length;
}
console.log(`Sprendimas su filter: ${numbers15_filter(numbers15, threshold)}`);

endTask();


 
 
// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6, 7];

startTask(16);
 
// Sprendimas su for ciklu:
const arrayAB_for = (arr1, arr2) => {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${arrayAB_for(arrayA, arrayB)}`);
 
 
// Sprendimas su concat metodu:
const arrayAB_concat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(`Sprendimas su concat metodu: ${arrayAB_concat(arrayA, arrayB)}`);
 
endTask();



 
// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
 
startTask(17);

// Sprendimas su for ciklu:
const nestedArray_for = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${nestedArray_for(nestedArray)}`);


// Sprendimas su flat metodu:
const nesterArray_flat = (arr) => {
    return arr.flat(Infinity);
}
console.log(`Sprendimas su flat metodu: ${nesterArray_flat(nestedArray)}`);
 
endTask();




// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

startTask(18);
 
// Sprendimas su for ciklu:
const task18_for = (arrA, arrB) => {
    const newArr = [];

    for (let i = 0; i < arrA.length; i++) {
        if (arrB.includes(arrA[i])) newArr.push(arrA[i]);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${task18_for(arrA, arrB)}`);
 
 
// Sprendimas su filter:
const task18_filter = (arrA, arrB) => {
    return arrA.filter((n) => arrB.includes(n));
}
console.log(`Sprendimas su filter metodu: ${task18_filter(arrA, arrB)}`);
 
endTask();


 
 
// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];

startTask(19);
 
// Sprendimas su for ciklu:
const numbers19_for = (arr) => {
    const numbers = {
        odd: [],
        even: [],
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            numbers.even.push(arr[i]);
        } else {
            numbers.odd.push(arr[i]);
        }
    }

    return numbers;
}
console.log(`Sprendimas su for ciklu: `, numbers19_for(numbers19));
 

// Sprendimas su reduce:
const numbers19_reduce = (arr) => {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        } else {
            acc.odd.push(num);
        }
        return acc;
    }, { odd: [], even: [] })
}
console.log(`Sprendimas su reduce metodu: `, numbers19_reduce(numbers19));
 
endTask();


 
 
// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];

startTask(20);
 
// Sprendimas su for ciklu:
const numbers20_for = (arr) => {
    const newArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }

    return newArr;
}
console.log(`Sprendimas su for ciklu: ${numbers20_for(numbers20)}`);

 
// Sprendimas su reduce:
const numbers20_reduce = (arr) => {
    return arr.reduce((acc, num, index) => {
        if (index === 0) {
            acc.push(num);
        } else {
            acc.push(acc[index - 1] + num);
        }
        return acc;
    }, []);
}
console.log(`Sprendimas su reduce metodu: ${numbers20_reduce(numbers20)}`);

endTask();
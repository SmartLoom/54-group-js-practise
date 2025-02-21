/**
 * Parašykite funkciją, kuri apskaičiuoja skaičiaus faktorialą.
 * 
 * Pvz. faktorialas(5) -> 120
 */
const faktorialas = (n) => {
    if (n < 0) return undefined;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(`Faktorialas skaičiui 5: ${faktorialas(5)}`);
console.log(`---`);


/**
 * Parašykite funkciją, kuri patikrina ar string'as yra palindromas.
 * 
 * Pvz. arPalindromas("level") -> true, arPalindromas("hello") -> false
 */
const arPalindromas = (s) => s === s.split('').reverse().join('');

console.log(`Ar palindromas 'level': ${arPalindromas(`level`)}`);
console.log(`Ar palindromas 'hello': ${arPalindromas(`hello`)}`);
console.log(`---`);


/**
 * Sukurkite funkciją, kuri priima masyvą skaičių ir grąžiną antrą didžiausią skaičių.
 * 
 * Pvz. antrasDidziausias([10, 5, 8, 20]) -> 10
 */
const antrasDidziausias = (arr) => arr.sort((a, b) => b - a)[1];

console.log(`Antras didžiausias skaičius masyve [10, 5, 8, 20]: ${antrasDidziausias([10, 5, 8, 20])}`);
console.log(`---`);


/**
 * Parašykite funkciją, kuri sugeneruoja atsitiktinį slaptažodį iš didžiųjų, mažųjų raidžių ir skaičių.
 * 
 * Pvz. generuotiSlaptazodi(8) -> "aB3dE5kL"
 */
const generuotiSlaptazodi = (n) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < n; i++) {
        const randomCharIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomCharIndex];
    }

    return password;
}
console.log(`Atsitiktinis slaptažodis iš 8 simbolių: ${generuotiSlaptazodi(8)}`);
console.log(`---`);


/**
 * Parašykite funkciją, kuri tikrina ar skaičius yra Fibonačio skaičius.
 * 
 * Pvz. arFibonacio(8) → true, arFibonacio(10) → false
 */
// 1 2 3 5 8 13 21 34 55
const arFibonacio = (n) => {
    if (n < 0) return false;

    let a = 0, b = 1;

    while (b < n) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b === n;
}

console.log(`Ar 8 yra Fibonačio skaičius? - ${arFibonacio(8)}`);
console.log(`Ar 10 yra Fibonačio skaičius? - ${arFibonacio(10)}`);
console.log(`---`);


/**
 * Parašykite funkciją, kuri iš teksto pašalina visus skaičius.
 * 
 * Pvz. beSkaiciu("Labas rytas, Lietuva 2025!") → "Labas rytas, Lietuva!"
 */
const beSkaiciu = (s) => {
    s = s.replace(/[0-9]/g, '');
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && '!'.includes(s[i + 1])) {
            continue;
        }
        newString += s[i];
    }
    return newString;
}
console.log(beSkaiciu("Labas rytas, Lietuva 2025!"));
console.log(`---`);


/**
 * Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina visus unikalius skaičius (pašalina pasikartojančius).
 * 
 * Pvz., unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
 */
const unikalusSkaiciai = (arr) => [... new Set(arr)];

console.log(`[1, 2, 2, 3, 4, 4, 5] -> ${unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5])}`);
console.log(`---`);

/**
 * Parašykite funkciją, kuri skaičiuoja, kiek kartų kiekviena raidė pasikartoja string‘e ir grąžina objektą.
 * 
 * Pvz., skaiciuotiRaidesObj("banana") → { b: 1, a: 3, n: 2 }
 */
const skaiciuotiRaidesObj = (string) => {
    const data = {};

    for (let i = 0; i < string.length; i++) {
        if (data[string[i]]) {
            data[string[i]]++;
        } else {
            data[string[i]] = 1;
        }
    }

    return data;
}

console.log(`Banana žodžio raidės:`);
console.table(skaiciuotiRaidesObj(`Banana`));
console.log(`---`);


/**
 * Sukurkite funkciją, kuri patikrina, ar du string‘ai yra anagramos (turi tas pačias raides, tik kita tvarka).
 * 
 * Pvz., arAnagrama("listen", "silent") → true, arAnagrama("hello", "world") → false
 */
const arAnagrama = (string1, string2) => {
    if (string1.length !== string2.length) return false;

    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');

    return string1 === string2;
}

console.log(`'listen' ir 'silent' anagramos - ${arAnagrama('listen', 'silent')}`);
console.log(`'hello' ir 'world' anagramos - ${arAnagrama('hello', 'world')}`);
console.log(`---`);

/**
 * Raskite klaidą ir ištaisykite funkciją, kad ji pakeistų tiek didžiąsias, tiek mažąsias "a" į "@".
 */

// const keistiRaide = (string) => string.replaceAll('a' || 'A', '@');
const keistiRaide = (string) => string.replaceAll(/[Aa]/g, '@');

console.log(keistiRaide("Banana"));
console.log(keistiRaide("Ananasas"));
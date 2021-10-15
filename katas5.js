// 1
let reverseString = (string) => {
    let result ='';


    for(let i = (string.length - 1); i >= 0 ; i--){
        result += string[i];
    }
    return result;
}

function testeReverseString1() {
    let result = reverseString("Aine Mota");
    let expected = "atoM eniA";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 
 
 function testeReverseString2() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 testeReverseString1();
 testeReverseString2();

//2

const testReverseSentence1 = () => {
    let result = reverseSentence('code like a girl');
    let expected = 'girl a like code';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testReverseSentence2 = () => {
    let result = reverseSentence('happy hacking');
    let expected = 'hacking happy';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}

const reverseSentence = (string) => {
    const array = string.split(' ');
    let size = array.length - 1;
    const reverse = () => {
        let word = array[size];
        size --;
        return word;
    }

    const reversed = array.map(reverse);
    return reversed.join(' ');
} 
testReverseSentence1();
testReverseSentence2();

//3
const testMinimumValue1 = () => {
    const array = [85,2,516,354,-230,52,45,6]
    let result = minimumValue(array);
    let expected = -230;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testMinimumValue2 = () => {
    const array = ['5',16,748,20,'/-&',45,876,13]
    let result = minimumValue(array);
    let expected = 'Conjunto não formado por números válidos.';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}

const minimumValue = (array) => {
    const minimum = (accumulated, current) => {
        if( typeof accumulated === 'number'){
            if(accumulated > current){
                return accumulated = current;
            }else{
                return accumulated;
            }
        }else{
            return undefined
        }
    }
    
    const result =  array.reduce(minimum);
    if(result === undefined){
        return 'Conjunto não formado por números válidos.'
    }else{
        return result;
    }
}
testMinimumValue1();
testMinimumValue2();

//4
const testMaximumValue1 = () => {
    const array = [321,-85,851,0,263,-21,9,741];
    const result = maximumValue(array);
    const expected = 851;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testMaximumValue2 = () => {
    const array = ['4as', 57,69,85,654,317];
    const result = maximumValue(array);
    const expected = 'Conjunto não formado por números válidos.';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const maximumValue = (array) =>{
    const minimum = (accumulated, current) => {
        if( typeof accumulated === 'number'){
            if(accumulated < current){
                return accumulated = current;
            }else{
                return accumulated;
            }
        }else{
            return undefined
        }
    }
    
    const result =  array.reduce(minimum);
    if(result === undefined){
        return 'Conjunto não formado por números válidos.'
    }else{
        return result;
    }
}
testMaximumValue1();
testMaximumValue2();
//5

const testCalculateRemainder1 = () => {
    const result = calculateRemainder( 6, 2);
    const expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testCalculateRemainder2 = ()  => {
    const result = calculateRemainder(7, 3.5);
    const expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testCalculateRemainder3 = ()  => {
    const result = calculateRemainder(15, 4);
    const expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}

const calculateRemainder = (num1, num2) => {
    const remainder =  num1 % num2;
    return remainder;
}

//6

const testDistinctValues1 = ()  => {
    const result = distinctValues('5 2 6 6 3 2 1 2 2 8 3 5 5 7');
    const expected = '5 2 6 3 1 8 7'; //    colocar em ordem crescente
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testDistinctValues2 = ()  => {
    const result = distinctValues('4.5 8 6 4.5 3 6 5 6 6 4 2 3 ');
    const expected = '4.5 8 6 3 5 4 2'; //COLOCAR EM ORDEM CRESCENTE 
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const distinctValues = (listString) => {
    const listArray =listString.split(' ');
    let arrayDistinct = [];

    for(let i = 0; i < listArray.length; i++){
        if(!arrayDistinct.includes(listArray[i])){
            arrayDistinct.push(listArray[i]);
        }
    }

    const stringDistinct = arrayDistinct.join(' ');
    return stringDistinct;
}

testDistinctValues1();
testDistinctValues1();

//7


const testCountValues1 = ()  => {
    const result = countValues('4.5 3 6 4.5 3 6 3 6 6 4 2 3');
    const expected = '2(1) 3(4) 4(1) 6(4) 4.5(2) ';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testCountValues2 = ()  => {
    const result = countValues('2 3 3 6 2 3 2 5 3 2 1 1 5');
    const expected = '1(2) 2(4) 3(4) 5(2) 6(1) ';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}

const countValues = (string) => {
    const arrayInicial = string.split(' ');
    let frequency = {};

    for(let i = 0; i < arrayInicial.length; i++){
        let number = arrayInicial[i];
        if(frequency[`${number}`]){
            frequency[`${number}`] += 1;
        }else{
            frequency[`${number}`] = 1;
        }
    }
 
    let result = '';

    for(let i in frequency){
        result += i + '(' + frequency[i] +') ';
    }

    return result;
}
testCountValues1();
testCountValues2();

//8


const testEvaluateExpression1 = ()  => {
    const result = evaluateExpression("a * b + c / d", {a: 2, b: 4, c: 8, d: 4});
    const expected = 10;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}
const testEvaluateExpression2 = ()  => {
    const result = evaluateExpression("x + y + z - m", {x: 1, y: 7, z: 3, m: 14});
    const expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)   
}

const evaluateExpression = (expression, obj) =>{
    for(let i = 0; i < expression.length; i++){
        let item = expression[i] 

        if(obj[`${item}`]){
            let number =obj[`${item}`].toString();
            expression = expression.replace(item, number) ;
            
        }
    }
    
    const result = eval(expression);
    return result;
}

testEvaluateExpression1();
testEvaluateExpression2();
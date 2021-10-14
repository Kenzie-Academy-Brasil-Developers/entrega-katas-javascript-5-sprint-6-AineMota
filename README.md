# Entrega - Katas de JavaScript 5

## Visão Geral

Para começar, faça o clone desse repo.

Lembra de quando falamos sobre testes unitários? Revise a aula de testes unitários se precisar refrescar a memória.

Para os katas de hoje, você irá implementar várias funções. Você deve escrever ao menos dois testes unitários para cada função demonstrando seu comportamento. Todo o output pode ser dado via console.assert(); você não precisa de qualquer formatação HTML para esses katas. Estas funções devem passar nos testes unitários que forem escritos.

## Katas

1.Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.

Por exemplo, um teste para o 1° Kata poderia se parecer com isso:
   
```js
function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
```
2.Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:   
>"bob likes dogs" retorna "dogs likes bob".

3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.

4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.

5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.

6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex: 

>"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7"

7.Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:   

>"1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram na primeira lista.

## Envio

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. No Gitlab, por favor, adicione o grupo `ka-br-<sua-turma>-correcoes` como ao seu projeto com a permissão "Reporter", e **envie a url do seu gitlab pages (Ex: https://nomedeusuario.gitlab.io/s\_js-katas-5/)**.

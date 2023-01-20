let n = Math.floor(Math.random() * 1000);

console.log('Я загадал число:', numberToGuess)

const numberFromUser = prompt("Введите число от 0 до 999:")

console.log("Вы ввели:", +numberFromUser)

if  (numberFromUser = numberToGuess){
    alert('Бинго! И как ты догадался?')
 }
    else if  (numberFromUser > numberToGuess) {
    alert ("Увы :(Давай еще раз! Нужно меньше")
  }
    else if  (numberFromUser > numberToGuess) {
        alert  ("Увы :( Давай еще раз! Нужно больше")
    }
    else if (isNaN(numberFromUser) || (+numberFromUser !== 0 && +numberFromUser !==1 )) {
    alert('Так не честно :( Введеный символ не учавствует в игре!')
    }

let password = 'Пароль';
let question = prompt('Введите пароль');
if (question === password) {
    alert('Пароль введен правильно')
} else {
    alert('Пароль введен неправильно')
}

let c = 2;
if (c > 0 && c < 10) {
    console.log('верно')
} 
else {
    console.log('неверно')
}
let d = 10;
let e = 102;
if (d > 100 || e > 100) {
    console.log('Верно')
} 
else {
    console.log('Неверно')
}
let a = Number('2');
let b = Number('3');
alert(a + b);

let monthNumber = Number(prompt('Введите номер месяца'));
switch(monthNumber) {
   case 1:
   case 2:
    case 12:
        console.log('Зима')
        break;
   case 3:
   case 4:
   case 5:
        console.log('Весна')
        break;
   case 6:
   case 7:
   case 8:
        console.log('Лето') 
        break;
   case 9:
   case 10:
   case 11:
        console.log('Осень')      
        break;              
}

let numer = prompt('Пожалуйста, введите любое число');
let numerous = (isNaN (numer));
if (numerous == 0) {
    let ref = (numer % 2)
    if (ref === 0) {
        alert('Четное число')
    }
    else {
        alert('Нечетное число')
    }
}
else {
    console.log ('NaN')
}
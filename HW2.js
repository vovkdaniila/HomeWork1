let a = prompt('Значение');
alert(a);


let yearFirstIphone = 2007;
alert(yearFirstIphone);

let nameCreator = 'Брендан Эйх';
alert(nameCreator);

let c = 10;
let d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);

let e = 5;
let result = d ** e;
alert(result);

a = 9;
b = 2;
result = (a % b);
alert(result);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt(`Сколько вам лет?`);
alert(age);

let user = {
    NAME: "John",
    AGE: 43,
    isAdmin: true
}
user['city of residence'] =  'Moskov';
user['AGE'] = 24;
delete user['city of residence'];
let info = prompt("Что вы хотите узнать о пользователе?", "NAME", "AGE", "isAdmin");
alert(user[info]);

let userName = prompt("Ваше имя?");
alert("Привет," + userName + "!");
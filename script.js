"use strict";
/* 
1. Описати своїми словами навіщо потрібні функції у програмуванні.

для того щоб коли нам потрібно виконати якусь дію ( наприклад провірити чи користовачу
  є 18 років) і щоб ми не писала постійно одну і ту саму перевірку, в коді ми будемо 
  просто викликати нашу функцію для прикладу yourAge() і наша функція буде повністью
   повторювати наші вимоги, простоми словами завдяки функціям ми спрощуємо собі роботу
   і не повтрюємо одні і ті самі дії!

2.Описати своїми словами, навіщо у функцію передавати аргумент.

це міст який ми прокладаємо між данними і фунцією, ми даємо доступ функції
 до указаних данних через аргументи) їх ще називають параметри) через аргументи ми можемо
 давати доступ до любих типів данних 
 , і ще важливо зрозуміти що аргументи не сохраняють в функцію собі данні які ми приймаємо
 а просто дають до них доступ (важливо розуміти різницю)   

 3.Що таке оператор return та як він працює всередині функції?

 оператор return повертає нішу дію яку ми зробиили у функції
 в середині функції коли ми скористувались оператором return все що було написано до нього
 зупиняє свою роботу та повертає нам результат щоб прийняти цей результат або данні нам
 потрібно вне функції кудась його присвоїти якщо ми цего не зробимо ми не зможимо 
 користуватись тими данними які ми хочемо получити через return
простим словами зробили дію у функції, хочемо передати результат користуємось return
 і потім маємо його получити (десь за межами функції) наприклад записати в перемінну

*/

let numUser = +prompt("ваше перше число");
let numUser2 = +prompt("ваше друге число");
let userOperator = prompt(
  "виберіть дію: додати(+), відняти(-), помножити(*), поділити(/). "
);

function calc() {
  switch ((numUser, numUser2, userOperator)) {
    case "+":
      return numUser + numUser2;
    case "-":
      return numUser - numUser2;
    case "/":
      return numUser / numUser2;
    case "*":
      return numUser * numUser2;
  }
}
alert("Результат " + calc());

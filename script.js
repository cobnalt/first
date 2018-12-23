let money = +prompt("Ваш бюджет на месяц?", "20000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-20");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
    let howMuch = +prompt("Во сколько обойдется?", "20000");
    appData.expenses[costs] = howMuch;
}

alert("бюджет на 1 день " + (appData.money / 30).toFixed(2));
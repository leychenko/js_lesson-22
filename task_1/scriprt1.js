//================================= Задача 1 ====================================
// Задача 1.Створити клас Client

// Властивості
// ID
// ПІБ
// Кількість грошей на рахунку

// Методи
// Додавання грошей
// Зняття грошей
// ToString

// На основі цього класу створити клас GoldenClient

// Властивості
// ID
// ПІБ
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів

// Методи
// Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції

// Вивести усіх простих клієнтів;
// Вивести усіх клієнтів GoldenClient;
// Знати сумарну кількість грошей на рахунку;


class Client {
  constructor({id, nameClient, countMoney}) {
    this.id = id
    this.nameClient = nameClient
    this.countMoney = countMoney
  }

  addMoney(value) {
    return (this.countMoney = this.countMoney + value)
  }
  getMoney(value) {
    return (this.countMoney = this.countMoney - value)
  }
  toString() {
    return `<p>Ім'я кліента: ${this.nameClient}<br> Баланс рахунку : <span>${this.countMoney}$</span><br> id: ${this.id}</p>`
  }
}

class GoldenClient extends Client {
  constructor({ id, nameClient, countMoney, limitCreditMoney, percent }) {
    super({ id, nameClient, countMoney })
    this.limitCreditMoney = limitCreditMoney
    this.percent = percent
	 this.peny = 0
  }
  addGoldenClientMoney(value) {
    this.addMoney(value)
  }

  getGoldenClientMoney(value) {
   return  this.getMoney(value)
  }


  getPeny(value){
	if (this.limitCreditMoney > 0)
	 this.limitCreditMoney = this.limitCreditMoney - value
	 this.peny = value * this.percent
	return this.peny
  }

//   toString(){
// 	return `<p>Кредитний ліміт :${this.limitCreditMoney}$<br> Пеня за використання кредиту: ${this.peny}$</p>`
//   }
}

class Bank {
  constructor(clientsList) {
	this.clientsList = clientsList
	this.goldClients = this.getGoldClients()
	this.totalMoney = this.getTotalSumMoney()
	this.singleClient = this.getSingleClient()
  }
  getSingleClient(){
	const result = this.clientsList.filter((el) =>
    !el.limitCreditMoney ? el.nameClient : null
  )
  return result
  }
	getGoldClients(){
		const result = this.clientsList.filter((el) =>
		el.limitCreditMoney ? el.nameClient : null
	)
		return result	
		}

  
  getTotalSumMoney(){
	const total = this.clientsList.reduce((prevEl,el)=>
		prevEl + el.countMoney
	,0)
	return total
  }
  toString(){
	return `<p><span>SingleClient</span> : ${this.singleClient}</p>
	<p><span>GoldenClient</span> : ${this.goldClients}</p>
	<p><span>Total money in the Bank: ${this.totalMoney}$</span></p>`
  }
}

const client1 = {
  id: "00101412",
  nameClient: "Sergiy Petrovich",
  countMoney: 5000,
//   limitCreditMoney: 0,
//   percent: 0,
}
const client2 = {
  id: "00135612",
  nameClient: "Irina Ivanovna",
  countMoney: 7000,
//   limitCreditMoney: 0,
//   percent: 0,
}
const client3 = {
  id: "02501417",
  nameClient: "Maksim Petrovich",
  countMoney: 50000,
  limitCreditMoney: 100000,
  percent: 0.1,
}
const client4 = {
  id: "00101699",
  nameClient: "Igor Grischenko",
  countMoney: 115000,
  limitCreditMoney: 20000 ,
  percent: 0.05,
}
const client5 = {
  id: "00107788",
  nameClient: "Dima Pupenko",
  countMoney: 95000,
  limitCreditMoney: 20000,
  percent: 0.05,
}


let clientsList = [
  new Client(client1),
  new Client(client2),
  new GoldenClient(client3),
  new GoldenClient(client4),
  new GoldenClient(client5),
] 


let s = new GoldenClient(client2)

console.log(s.getGoldenClientMoney(800))
console.log(s.addGoldenClientMoney(2200))
let bank = new Bank(clientsList)
document.write(bank)

